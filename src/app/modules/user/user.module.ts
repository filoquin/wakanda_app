import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';


export const routes = [
  { path: '', component: ProfileComponent},
  { path: 'profile',   PathMatch: 'full', component: ProfileComponent},
  { path: 'profile/edit',   PathMatch: 'full', component: ProfileEditComponent}
];

@NgModule({
  declarations: [  ProfileComponent, ProfileEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule { }
