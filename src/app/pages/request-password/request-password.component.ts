import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.css']
})
export class RequestPasswordComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder, private toasterService: ToastrService) {}

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  get formControls() {
    return this.authForm.controls;
  }


  requestPassword() {
    this.isSubmitted = true;
    if (this.authForm.invalid) {
      return;
    }
    const email = this.authForm.controls.email.value;
    this.userService.reqConfirmCode(email).subscribe((data: any) => {
      if (data.result) {
        this.router.navigateByUrl('/confirmationcode');
      }else{
        //const errormessage = data.error.data.message;
        this.toasterService.warning('El email no esta registrado');
      }
      console.log(data);
    });
  }
}
