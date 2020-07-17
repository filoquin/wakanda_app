import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';


export const routes = [
  { path: '', component: RegisterComponent},
  { path: 'register', PathMatch: 'full', component: RegisterComponent},
  { path: 'profile',   PathMatch: 'full', component: ProfileComponent}
];

@NgModule({
  declarations: [ RegisterComponent, ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule { }
