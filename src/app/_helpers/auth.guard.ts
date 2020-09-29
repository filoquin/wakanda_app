import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import {UserService} from '../_services/user.service';
import { OdooRPCService } from "../_services/odoorcp.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    //private userService: UserService,
       private odooRPC: OdooRPCService 
  ) {}

  /*canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.userService.userValue;
    if (user) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }*/
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable<boolean>((obs) => {
      this.odooRPC.getSessionInfo().then((result: any) => {
        if (result.uid) {
          obs.next(true);
        } else {
          this.router.navigate(["/login"], {
            queryParams: { returnUrl: state.url },
          });

          obs.next(false);
        }
      });
    });
  }
}
