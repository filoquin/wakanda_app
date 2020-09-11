import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../_services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  editForm: FormGroup;
  isSubmitted = false;
  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
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
    return this.editForm.controls;
  }


  save() {
    this.isSubmitted = true;
    if (this.editForm.invalid) {
      return;
    }

  }
}
