import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isSubmitted = false;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      completename: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  get formControls() {
    return this.registerForm.controls;
  }
  actual_year(){
      return new Date().getFullYear()

  }
  counter(i: number) {
      return new Array(i);
  }

  register() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const user = this.registerForm.controls.user.value;
    const password = this.registerForm.controls.password.value;
    const completename = this.registerForm.controls.completename.value;
    const email = this.registerForm.controls.email.value;
    const phone = this.registerForm.controls.phone.value;
    const address = this.registerForm.controls.address.value;
    const day = this.registerForm.controls.day.value;
    const month = this.registerForm.controls.month.value;
    const year = this.registerForm.controls.year.value;
    this.userService.register(user,password,completename,email,phone,address,day,month,year).subscribe((data: any) => {
      if (data.result) {
        this.router.navigateByUrl('/');
      }else{
        alert('Ocurrio un error');
      }
    });
  }

  
}
