import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSelectComponent } from './product-select/product-select.component';
import {BsModalService, ModalModule} from 'ngx-bootstrap/modal';
import { ProductItemComponent } from './product-item/product-item.component';

export const routes = [
  { path: '', component: ProductListComponent}
];

@NgModule({
  declarations: [ProductListComponent, ProductSelectComponent, ProductItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot()

  ],
  providers: [BsModalService],
  entryComponents: [ProductSelectComponent]
})
export class ProductsModule { }
