import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PricesListComponent} from './prices-list/prices-list.component';
import {RouterModule} from '@angular/router';
import { PricesTemplatesComponent } from './prices-templates/prices-templates.component';

export const routes = [
  { path: '', component: PricesListComponent}
];

@NgModule({
  declarations: [PricesListComponent, PricesTemplatesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class PricesModule { }
