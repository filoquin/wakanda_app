import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { UserService } from "../_services/user.service";

import { Observable } from "rxjs";

import { OdooRPCService } from "../_services/odoorcp.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    public odooRPC: OdooRPCService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const session_act :  Observable<boolean> | Promise<boolean> | boolean = new Observable((observer) => {
      this.odooRPC.getSessionInfo().then((res) =>{
        //this.odooRPC.cookies.set_sessionId(res['session_id']);

        observer.next(true);

      }).catch((err) => {

          observer.next(false);
          observer.complete();
              this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});

        });

    });
    return session_act
}
 /* canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.userService.userValue;
    if (user) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }*/

  /*canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let res =  new Observable<boolean>((obs) => {
      this.userService.isLogged.subscribe((data: any) => {
        console.log(data);
        if (data){
          obs.next(data);
          obs.complete();

        } else {
          obs.next(data);
          obs.complete();
          console.log('error');
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        } 
      });
    });
    return res;
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

  }*/

}
