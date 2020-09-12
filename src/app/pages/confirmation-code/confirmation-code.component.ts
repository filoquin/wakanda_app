import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../_services/user.service";
import { ToastrService } from "ngx-toastr";

@Component({
	selector: "app-confirmation-code",
	templateUrl: "./confirmation-code.component.html",
	styleUrls: ["./confirmation-code.component.css"],
})
export class ConfirmationCodeComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted = false;
	constructor(
		private userService: UserService,
		private router: Router,
		private formBuilder: FormBuilder,
		private toasterService: ToastrService
	) {}

	ngOnInit(): void {
		this.authForm = this.formBuilder.group({
			code: ["", [Validators.required, Validators.minLength(4)]],
			password: ["", [Validators.required, Validators.minLength(6)]],
			password2: ["", [Validators.required, Validators.minLength(6)]],
		});
	}

	get formControls() {
		return this.authForm.controls;
	}

	resetPassword() {
		this.isSubmitted = true;
		if (this.authForm.invalid) {
			return;
		}
		if (this.authForm.controls.password.value != this.authForm.controls.password2.value){
			this.toasterService.warning("Los passwords no coiciden");
			return;

		}
		const code = this.authForm.controls.code.value;
		const password = this.authForm.controls.password.value;
		this.userService.senConfirmCode(code,password).subscribe((data: any) => {
			if (data.result) {
				this.router.navigateByUrl("/");
			} else {
				//const errormessage = data.error.data.message;
				this.toasterService.warning("No fue posible validar el codigo");
			}
			console.log(data);
		});
	}
}
