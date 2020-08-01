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
      user: ['tests', Validators.required],
      password: ['test', Validators.required],
      completename: ['test tet', Validators.required],
      email: ['lolo@gmail.com', Validators.required],
      phone: ['2994771757', Validators.required],
      address: ['lugon 189', Validators.required],
      day: ['28', Validators.required],
      month: ['02', Validators.required],
      year: ['1975', Validators.required]
    });
  }

  get formControls() {
    return this.registerForm.controls;
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
