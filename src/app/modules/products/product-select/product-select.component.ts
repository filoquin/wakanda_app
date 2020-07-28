import {Component, EventEmitter, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {Product} from "../shared/product";

@Component({
  selector: 'app-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.css']
})
export class ProductSelectComponent implements OnInit {
  event: EventEmitter<any> = new EventEmitter();
  products: Product[] = [{id: 1, name: 'Wakanda', price: 200},
    {id: 2, name: 'Blue berry', price: 250},
    {id: 3, name: 'Tilo y bambu', price: 250},
    {id: 4, name: 'Limon y te verde', price: 250},
    {id: 5, name: 'Coco y avellanas', price: 250},
    {id: 6, name: 'Te verde y Jengibre', price: 250},
    {id: 7, name: 'Naranja y Jengibre', price: 250},
    {id: 8, name: 'Red plum', price: 250},
    {id: 9, name: 'Cher', price: 250},
    {id: 10, name: 'Lavanda', price: 250},
    {id: 11, name: 'Madera con sandalo', price: 250},
    {id: 12, name: 'Flores blancas', price: 250},
    {id: 13, name: 'Flores de azahar', price: 250},

  ];

  constructor( private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
