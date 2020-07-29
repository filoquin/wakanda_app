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

  products: any = ['Textiles', 'Difusores' , 'Aceites', 'Antibacteriales', 'Auto', 'Mascotas']
  public total: any  = { quantity: 0, amount: 0, gain: 0};

  constructor(private SaleOrderService: SaleOrderService, private bsModalRef: BsModalRef, private bsModalService: BsModalService) { }

  ngOnInit(): void {
    this.SaleOrderService.getCategories()
      .then((res)=>{console.log(res)})
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
