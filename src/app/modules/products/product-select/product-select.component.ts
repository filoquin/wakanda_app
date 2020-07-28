import {Component, EventEmitter, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.css']
})
export class ProductSelectComponent implements OnInit {
  event: EventEmitter<any> = new EventEmitter();

  constructor( private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
