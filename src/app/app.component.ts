import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wakanda';
  constructor(
    private router: Router,
    private userService: UserService
  ) {
    // redirect to home if already logged in
    // if (this.userService.userValue) {
    //   this.router.navigate(['/']);
    // }
  }
}
