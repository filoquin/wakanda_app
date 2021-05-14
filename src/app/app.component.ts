import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './_services/user.service';
import {OdooRPCService} from './_services/odoorcp.service';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wakanda';
  constructor(
    private router: Router,
    private userService: UserService,
    public odooRPC: OdooRPCService
  ) {
    this.odooRPC.init({
      odoo_server: environment.apiUrl,
      http_auth: "username:password", // optional
    });
    // redirect to home if already logged in
    // if (this.userService.userValue) {
    //   this.router.navigate(['/']);
    // }
  }
}
