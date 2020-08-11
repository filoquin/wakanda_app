import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;

  constructor() { }

  ngOnInit(): void {
  }

  removeProductQty(product: any) {

    if ( product.qty_select > 0 ){
      product.qty_select -= 1;
    }else{
      alert('No puede realizar esta operacion');
    }

  }

  addProductQty(product: any) {
    if ( !product.qty_select){
      product.qty_select = 1;
    }else {
      product.qty_select += 1;
    }
  }
}
