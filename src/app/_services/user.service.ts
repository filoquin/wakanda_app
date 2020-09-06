import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../_models/user';
import {environment} from '../../environments/environment';
import {OdooRPCService} from './odoorcp.service';

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
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username, password) {
    return this.http.post<User>(`${this.apiUrl}/wkn/json_login`, {params: {login: username, password: password}})
      .pipe(map((data: any) => {
        console.log(data);
        if ( data.result) {
          const user = data.result.user;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        }
        return data;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  register(user,password,completename,email,phone,address,day,month,year){
    return this.http.post(`${this.apiUrl}/wkn/json_register`, {params: {
          user: user,
          password: password,
          completename: completename,
          email: email,
          phone: phone,
          address: address,
          day: day,
          month: month,
          year:year

        }})
      .pipe(map((data: any) => {
        console.log(data);
        if ( data.result) {
          const user = data.result.user;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        }
        return data;
      }));

  }
  getProfile(){
    return this.odooRPC
      .call("res.users", "wkn_my_profile", [], {});
  }


}
