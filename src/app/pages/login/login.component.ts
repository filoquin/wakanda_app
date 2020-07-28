import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted = false;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
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
    this.userService.login(username, password).subscribe((data: any) => {
      if (data.result) {
        this.router.navigateByUrl('/');
      }else{
        alert('Ocurrio un error');
      }
    });
  }
}
