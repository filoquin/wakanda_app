import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AuthGuard} from '../../_helpers/auth.guard';


export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardComponent
  ]
})

export class DashboardModule { }
