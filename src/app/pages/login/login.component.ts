import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {ToastrService} from "ngx-toastr";
import { environment } from "../../../environments/environment";
import { OdooRPCService } from "../../_services/odoorcp.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted = false;
  usernamestorage = null;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder, private toasterService: ToastrService, public odooRPC: OdooRPCService) {
    if ( localStorage.getItem('usernamestorage')){
      this.usernamestorage = localStorage.getItem('usernamestorage');
    }
  }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() {
    return this.authForm.controls;
  }


  signIn() {
    this.isSubmitted = true;
    if (this.authForm.invalid) {
      return;
    }
    const username = this.authForm.controls.email.value;
    const password = this.authForm.controls.password.value;
    localStorage.setItem('usernamestorage', username);

    this.userService.loginOdoo(username, password).subscribe((data: any) => {
      if (data.error) {
        const errormessage = data.error;
        this.toasterService.warning(errormessage);
      }else{
        this.router.navigate(['/']);
      }
    });
  }
}
