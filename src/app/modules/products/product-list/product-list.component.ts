import { Component, OnInit } from '@angular/core';
import {ProductSelectComponent} from '../product-select/product-select.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {SaleOrderService} from '../../../_services/sale-order.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  bsModalRef: BsModalRef;
  products: any = []
  public total: any  = { quantity: 0, amount: 0, gain: 0};

  constructor(private saleOrderService: SaleOrderService,  private bsModalService: BsModalService) { }

  ngOnInit(): void {
    this.saleOrderService.getCategories()
      .then((res) => {console.log(res)
                      this.products = res.records;
      })
      .catch((err: any) => {});

  }

  // @product.id
  showProducts(id) {
    const initialState = {
      id
    };
    this.bsModalRef = this.bsModalService.show(ProductSelectComponent, { initialState , class: 'product-select' });
    this.bsModalRef.content.event.subscribe(result => {
      if (result.status === 'OK') {
      }
    });
  }
}
