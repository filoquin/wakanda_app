import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from '@angular/common/http';


class Cookies { // cookies doesn't work with Android default browser / Ionic

    private session_id: string = null;

    delete_sessionId() {
        this.session_id = null;
        document.cookie = "session_id=; expires=Wed, 29 Jun 2016 00:00:00 UTC";
    }

    get_sessionId() {
        return document
                .cookie.split("; ")
                .filter(x => { return x.indexOf("session_id") === 0; })
                .map(x => { return x.split("=")[1]; })
                .pop() || this.session_id || "";
    }

    set_sessionId(val: string) {
        document.cookie = `session_id=${val}`;
        this.session_id = val;
    }

}

@Injectable({
  providedIn: 'root'
})
export class OdooRPCService {
    private odoo_server: string;
    private http_auth: string;
    public cookies: Cookies;
    private uniq_id_counter: number = 0;
    private shouldManageSessionId: boolean = false; // try without first
    private context: Object = JSON.parse(localStorage.getItem("user_context")) || {"lang": "es_AR"};
    private headers: HttpHeaders;
    public uid: number;
    public sessionId : string = '';
    constructor(
        @Inject(HttpClient) private http: HttpClient) {
        this.cookies = new Cookies();
    }

    private buildRequest(url: string, params: any) {
        this.uniq_id_counter += 1;
        if (this.shouldManageSessionId) {
            params.session_id = this.sessionId;
        }
        this.headers = new HttpHeaders({
            "Content-Type": "application/json",
            "X-Openerp-Session-Id": this.sessionId,
            "Authorization": "Basic " + btoa(`${this.http_auth}`)
        });
        return JSON.stringify({
            jsonrpc: "2.0",
            method: "call",
            params: params, // payload
        });
    }

    private handleOdooErrors(response: any) {
        if (!response.error) {
            return response.result;
        }

        let error = response.error;
        let errorObj = {
            title: "    ",
            message: "",
            fullTrace: error
        };

        if (error.code === 200 && error.message === "Odoo Server Error" && error.data.name === "werkzeug.exceptions.NotFound") {
            errorObj.title = "page_not_found";
            errorObj.message = "HTTP Error";
        } else if ( (error.code === 100 && error.message === "Odoo Session Expired") || // v8
                    (error.code === 300 && error.message === "OpenERP WebClient Error" && error.data.debug.match("SessionExpiredException")) // v7
                ) {
                    errorObj.title = "session_expired";
                    //this.sessionId= '';
                    //this.cookies.delete_sessionId();
        } else if ( (error.message === "Odoo Server Error" && /FATAL:  database "(.+)" does not exist/.test(error.data.message))) {
            errorObj.title = "database_not_found";
            errorObj.message = error.data.message;
        } else if ( (error.data.name === "openerp.exceptions.AccessError")) {
            errorObj.title = "AccessError";
            errorObj.message = error.data.message;
        } else {
            let split = ("" + error.data.fault_code).split("\n")[0].split(" -- ");
            if (split.length > 1) {
                error.type = split.shift();
                error.data.fault_code = error.data.fault_code.substr(error.type.length + 4);
            }

            if (error.code === 200 && error.type) {
                errorObj.title = error.type;
                errorObj.message = error.data.fault_code.replace(/\n/g, "<br />");
            } else {
                errorObj.title = error.message;
                errorObj.message = error.data.debug.replace(/\n/g, "<br />");
            }
        }
        return Promise.reject(errorObj);
    }

    private handleHttpErrors(error: any) {
        return Promise.reject(error.message || error);
    }

    public init(configs: any) {
        this.odoo_server = configs.odoo_server;
        this.http_auth = configs.http_auth || null;
    }

    public setOdooServer(odoo_server: string) {
        this.odoo_server = odoo_server;
    }

    public setHttpAuth(http_auth: string) {
        this.http_auth = http_auth;
    }

    public sendRequest(url: string, params: Object): Promise<any> {
        let body = this.buildRequest(url, params);
        let $this = this; 
        return this.http.post(this.odoo_server + url, body, {headers: this.headers})
            .toPromise()
            .then($this.handleOdooErrors)
            .catch($this.handleHttpErrors);
    }

    public getServerInfo() {
        return this.sendRequest("/web/webclient/version_info", {});
    }

    public getSessionInfo() {

        return this.sendRequest("/web/session/get_session_info", {});
    }

    public login(db: string, login: string, password: string) {
        let params = {
                db : db,
                login : login,
                password : password
            };
        let $this = this;
        return this.sendRequest("/web/session/authenticate", params).then(function(result: any) {

            if (!result.uid) {
                $this.sessionId= '';
                //$this.cookies.delete_sessionId();
                return Promise.reject({
                    title: "wrong_login",
                    message: "Username and password don't match",
                    fullTrace: result
                });
            }
            $this.context = result.user_context;
            localStorage.setItem("user_context", JSON.stringify($this.context));
            //$this.sessionId = result.session_id;
            //$this.cookies.set_sessionId(result.session_id);
            return result;
        });
    }

    public isLoggedIn(force: boolean = true) {
        let $this = this;
        /*if (!force) {
            return Promise.resolve(this.cookies.get_sessionId().length > 0);
        }*/

        return this.getSessionInfo().then((result: any) => {
            //this.sessionId= result.session_id;
            //$this.cookies.set_sessionId(result.session_id);
            return !!(result.uid);
        });
    }
    public get_uid() {
        return this.getSessionInfo().then((result: any) => {
            this.uid = result.uid;
        });
    }
    public set_uid() {
        return this.getSessionInfo().then((result: any) => {
            this.uid = result.uid;
        });
    }

    public logout(force: boolean = true) {
        this.sessionId= '';

        //this.cookies.delete_sessionId();
        if (force) {
            return this.getSessionInfo().then((r: any) => { // get db from sessionInfo
                if (r.db)
                    return this.login(r.db, "", "");
            });
        }else {
            return Promise.resolve();
        }
    }

    public getDbList() { // only use for odoo < 9.0
        return this.sendRequest("/web/database/get_list", {});
    }


    public searchRead(model: string, domain: any, fields: any, limit: number = 80, offset: number = 0 , context: any = {},order : string = '') {
        let params = {
            model: model,
            domain: domain,
            fields: fields,
            limit: limit,
            offset: offset,
            context: context || this.context
        };
        if (order){
            params['order'] = order;
        }
        return this.sendRequest("/web/dataset/search_read", params);
    }

    public read(model: string, id: any, fields: any,  context: any = {}) {
        let params = {
            fields: fields,
            context: context || this.context
        };
        if (Number.isInteger(id)){
            id = [id];
        }
        return this.call(model, 'read',[id],     params);
    }

    public updateContext(context: any) {
        localStorage.setItem("user_context", JSON.stringify(context));
        let args = [[(<any>this.context).uid], context];
        this.call("res.users", "write", args, {})
            .then(()=>this.context = context)
            .catch((err: any) => this.context = context);
    }

    public getContext() {
        return this.context;
    }

    public getServer() {
        return this.odoo_server;
    }


    public fields_get(model: string, args: any = [], kwargs: any = {}) {
        return  this.call(model,'fields_get',args,kwargs);

    }

    public call(model: string, method: string, args: any, kwargs: any) {

        kwargs = kwargs || {};
        kwargs.context = kwargs.context || {};
        (<any>Object).assign(kwargs.context, this.context);

        let params = {
            model: model,
            method: method,
            args: args,
            kwargs: kwargs,
        };
        return this.sendRequest("/web/dataset/call_kw", params);
    }
}