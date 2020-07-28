import { Component, OnInit } from '@angular/core';
import {ProductSelectComponent} from '../product-select/product-select.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = ['Textiles', 'Difusores' , 'Aceites', 'Antibacteriales', 'Auto', 'Mascotas']

  constructor(private bsModalRef: BsModalRef, private bsModalService: BsModalService) { }

  ngOnInit(): void {
  }

  // @product.id
  showProducts(id) {
    const initialState = {
      id
    };
    this.bsModalRef = this.bsModalService.show(ProductSelectComponent, { initialState });
    this.bsModalRef.content.event.subscribe(result => {
      if (result.status === 'OK') {
      }
    });
  }
}
