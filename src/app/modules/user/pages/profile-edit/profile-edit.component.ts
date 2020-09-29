import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../../../_services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile-edit",
  templateUrl: "./profile-edit.component.html",
  styleUrls: ["./profile-edit.component.css"],
})
export class ProfileEditComponent implements OnInit {
  editForm: FormGroup;
  isSubmitted = false;
  partnerId: number;
  public image:any;
  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  actual_year() {
    return new Date().getFullYear()

  }
  counter(i: number) {
    return new Array(i);
  }
  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      completename: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      address: ["", Validators.required],
      day: ["", Validators.required],
      month: ["", Validators.required],
      year: ["", Validators.required],
    });

    this.userService
      .getProfile()
      .then((res) => {
        console.log(res);
        this.partnerId = res["partner_id"];

        this.editForm.patchValue({
          completename: res["name"],
          email: res["email"],
          phone: res["phone"],
          address: res["street"],
          day: res["day"],
          month: res["month"],
          year: res["year"]
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  get formControls() {
    return this.editForm.controls;
  }

  save() {
    this.isSubmitted = true;
    if (this.editForm.invalid) {
      return;
    }
    const name = this.editForm.controls.completename.value;
    const email = this.editForm.controls.email.value;
    const phone = this.editForm.controls.phone.value;
    const street = this.editForm.controls.address.value;
    const birthdate = this.editForm.controls.year.value + "-" + ("00" + this.editForm.controls.month.value).slice(-2) + "-" + this.editForm.controls.day.value;

    this.userService
      .saveProfile(this.partnerId, name, email, phone, street, birthdate)
      .then((res) => {
        console.log(res);
        this.router.navigateByUrl("/user/profile");
      })
      .catch((err: any) => {
        console.log("errors" + err);
      });
  }

  fileChange(input){
    const reader = new FileReader();
    if (input.files.length) {
        const file = input.files[0];
        reader.onload = () => {
            this.image = reader.result;
        }
        reader.readAsDataURL(file);
    }
}

removeImage():void{
    this.image = '';
}

}
