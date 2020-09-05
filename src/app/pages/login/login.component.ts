import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted = false;
  usernamestorage = null;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder, private toasterService: ToastrService) {
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
    this.userService.login(username, password).subscribe((data: any) => {
      if (data.result) {
        this.router.navigateByUrl('/');
      }else{
        const errormessage = data.error.data.message;
        this.toasterService.warning(errormessage);
      }
    });
  }
}
