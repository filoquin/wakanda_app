import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderListComponent} from './order-list/order-list.component';
import {RouterModule} from '@angular/router';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { OrderPromosComponent } from './order-promos/order-promos.component';
import { OrderDeliveryComponent } from './order-delivery/order-delivery.component';

export const routes = [
  { path: '', component: OrderListComponent},
  { path: 'summary', component: OrderSumaryComponent},
  { path: 'promos/:id', component: OrderPromosComponent},
  { path: 'delivery/:id', component: OrderDeliveryComponent}
];

@NgModule({
  declarations: [OrderListComponent, OrderSumaryComponent, OrderPromosComponent, OrderDeliveryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrdersModule { }
