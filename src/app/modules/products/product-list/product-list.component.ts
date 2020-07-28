import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = ['Textiles', 'Difusores' , 'Aceites', 'Antibacteriales', 'Auto', 'Mascotas']

  constructor() { }

  ngOnInit(): void {
  }

  showSubproducts() {
    console.log('Show products');
  }
}
