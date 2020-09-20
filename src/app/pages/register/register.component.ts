import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../_services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted = false;
  states: any =  [{'id': 569, 'name': 'Salta'}, {'id': 554, 'name': 'Buenos Aires'}, {'id': 553, 'name': 'Ciudad Autónoma de Buenos Aires'}, {'id': 571, 'name': 'San Luis'}, {'id': 560, 'name': 'Entre Ríos'}, {'id': 564, 'name': 'La Rioja'}, {'id': 574, 'name': 'Santiago Del Estero'}, {'id': 556, 'name': 'Chaco'}, {'id': 570, 'name': 'San Juan'}, {'id': 555, 'name': 'Catamarca'}, {'id': 563, 'name': 'La Pampa'}, {'id': 565, 'name': 'Mendoza'}, {'id': 566, 'name': 'Misiones'}, {'id': 561, 'name': 'Formosa'}, {'id': 567, 'name': 'Neuquén'}, {'id': 568, 'name': 'Río Negro'}, {'id': 573, 'name': 'Santa Fe'}, {'id': 576, 'name': 'Tucumán'}, {'id': 557, 'name': 'Chubut'}, {'id': 575, 'name': 'Tierra del Fuego'}, {'id': 559, 'name': 'Corrientes'}, {'id': 558, 'name': 'Córdoba'}, {'id': 562, 'name': 'Jujuy'}, {'id': 572, 'name': 'Santa Cruz'}] ;
  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    //this.userService.getStates();

    this.registerForm = this.formBuilder.group({
      user: ["", Validators.required],
      password: ["", Validators.required],
      completename: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      address: ["", Validators.required],
      day: ["", Validators.required],
      month: ["", Validators.required],
      year: ["", Validators.required],
      knowUs: ["", Validators.required],
      state: ["", Validators.required],
    });
  }

  get formControls() {
    return this.registerForm.controls;
  }
  actual_year() {
    return new Date().getFullYear();
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
    const knowUs = this.registerForm.controls.knowUs.value;
    const state = this.registerForm.controls.state.value;
    this.userService
      .register(
        user,
        password,
        completename,
        email,
        phone,
        address,
        day,
        month,
        year,
        knowUs,
        state
      )
      .subscribe((data: any) => {
        if (data.result) {
          this.router.navigateByUrl("/welcome");
        } else {
          alert("Ocurrio un error");
        }
      });
  }
}
