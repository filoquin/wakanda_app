import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../_models/user';
import { environment } from '../../environments/environment';
import { OdooRPCService } from './odoorcp.service';

// import { environment } from '@environments/environment';
// import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  private apiUrl = environment.apiUrl;
  private customheaders: any = null;

  constructor(
    private router: Router,
    private http: HttpClient,
    public odooRPC: OdooRPCService
  ) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user'))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }
  get isLogged() {
    const session_act = new Observable((observer) => {
      this.odooRPC
        .getSessionInfo()
        .then((result: any) => {
          console.log(result);
          if (result.uid) {
            observer.next(true);
            observer.complete();
          } else {
            observer.next(false);
            observer.complete();
          }
        })
        .catch((err) => {
          console.log(err);
          observer.next(false);
          observer.complete();
        });
    });
    return session_act;
  }
  login(username, password) {
    return this.http
      .post<User>(`${this.apiUrl}/wkn/json_login?db=wakandaa`, {
        params: { login: username, password: password },
      })
      .pipe(
        map((data: any) => {
          console.log(data);
          if (data.result) {
            const user = data.result.user;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
          }
          return data;
        })
      );
  }

  public loginOdoo(username, password) {
    const loguer = new Observable((observer) => {
      this.odooRPC
        .login(environment.db, username, password)
        .then((res) => {
          const user = {
            id: res['uid'],
            login: username,
            name: res['partner_display_name'],
          };
          this.odooRPC.cookies.set_sessionId(res.session_id);

          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          observer.next(user);
          observer.complete();
        })
        .catch((err) => {
          console.log(err);

          localStorage.removeItem('user');
          this.userSubject.next(null);
          this.router.navigate(['/login']);
          observer.next({ error: 'No pudo ingresar. Verifique sus datos' });
          observer.complete();
        });
    });
    return loguer;
  }

  public forceUid(user) {
    this.userSubject.next(user);
  }
  logout() {
    /*this.odooRPC.logout(false).then((res) => {
      localStorage.removeItem("user");
      this.userSubject.next(null);
      this.router.navigate(["/login"]);
    });*/

    console.log(`${this.apiUrl}/web/session/destroy`);

    // remove user from local storage and set current user to null
    this.http
      .post(`${this.apiUrl}/web/session/destroy`, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/login']);
      });
  }

  register(
    user,
    password,
    completename,
    email,
    phone,
    address,
    day,
    month,
    year,
    knowUs,
    state,
    documento,
    tipo_documento
  ) {
    return this.http
      .post(`${this.apiUrl}/wkn/json_register`, {
        params: {
          user: user,
          password: password,
          completename: completename,
          email: email,
          phone: phone,
          address: address,
          day: day,
          month: month,
          year: year,
          know_us: knowUs,
          state_id: state,
          documento: documento,
          tipo_documento: tipo_documento,
        },
      })
      .pipe(
        map((data: any) => {
          if (data.result) {
            const user = data.result.user;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
          }
          return data;
        })
      );
  }
  getProfile() {
    return this.odooRPC.call('res.users', 'wkn_my_profile', [], {});
  }

  getWelcomevideo() {
    return this.odooRPC.call('res.users', 'welcomevideo', [], {});
  }
  saveProfile(id, name, email, phone, street, birthdate, image) {
    if (image) {
      image = image.split(',')[1];
    }
    return this.odooRPC.call(
      'res.partner',
      'write',
      [
        id,
        {
          name: name,
          email: email,
          phone: phone,
          street: street,
          birthdate_date: birthdate,
          image_1920: image,
        },
      ],
      {}
    );
  }

  reqConfirmCode(email) {
    return this.http
      .post(`${this.apiUrl}/wkn/req_confirm_code`, {
        params: {
          email: email,
        },
      })
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }
  senConfirmCode(token, password) {
    return this.http
      .post(`${this.apiUrl}/wkn/send_confirm_code`, {
        params: {
          token: token,
          password: password,
        },
      })
      .pipe(
        map((data: any) => {
          if (data.result) {
            const user = data.result.user;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
          }
          return data;
        })
      );
  }
  /*getStates() {
    console.log(`${this.apiUrl}/wkn/states`);
    this.http.get(`${this.apiUrl}/wkn/states`,'').pipe(
      map((data: any) => {
        console.log(data);
        return data;
      })
    );
    console.log("oooo");
  }*/
}
