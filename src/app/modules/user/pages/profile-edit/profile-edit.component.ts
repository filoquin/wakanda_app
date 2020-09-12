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
    return this.editForm.controls;
  }


  save() {
    this.isSubmitted = true;
    if (this.editForm.invalid) {
      return;
    }

  }
}
