import {Component, EventEmitter, OnInit} from '@angular/core';

import {Product} from '../shared/product';
import {SaleOrderService} from '../../../_services/sale-order.service';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.css']
})
export class ProductSelectComponent implements OnInit {
  private category: any;
  private oldProductsSelected: any;

  public categoryName: string = null;
  event: EventEmitter<any> = new EventEmitter();
  products: Product[] = null;


  constructor(private bsModalRef: BsModalRef, private saleOrderService: SaleOrderService) {


  }

  ngOnInit(): void {
    this.categoryName = this.category.name;

    this.saleOrderService.getProducts(this.category.id)
      .then((res) => {

        this.products = res.records;
        this.products.forEach( p => {
          this.oldProductsSelected.forEach( o => {
              if ( p.id === o.id ){
                p.qty_select = o.qty_select;
              }
          });
        });
      })
      .catch((err: any) => {
      });
  }

  accept() {
    let productsSelected = [];
    this.products.forEach(product => {
      if (product.qty_select) {
        productsSelected.push(product);
      }
    });
    this.event.emit({status: 'OK', productsSelected});
    this.bsModalRef.hide();

  }

  close() {
    this.bsModalRef.hide();
  }
}
