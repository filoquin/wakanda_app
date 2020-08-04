import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqListComponent } from './faq-list/faq-list.component';
import {RouterModule} from '@angular/router';

export const routes = [
  { path: '', component: FaqListComponent}
];

@NgModule({
  declarations: [FaqListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FaqModule { }
