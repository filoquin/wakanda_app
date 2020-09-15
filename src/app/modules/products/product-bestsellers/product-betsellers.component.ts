import { Component, OnInit } from '@angular/core';
import {SaleOrderService} from "../../../_services/sale-order.service";

@Component({
  selector: 'app-product-betsellers',
  templateUrl: './product-betsellers.component.html',
  styleUrls: ['./product-betsellers.component.css']
})
export class ProductBestsellersComponent implements OnInit {
 public bestsellers: any = [];
  constructor(private saleOrderService: SaleOrderService) {}
  ngOnInit(): void {
    this.saleOrderService
      .getSaleRank()
      .then((res) => {
        console.log(res.records);
        this.bestsellers = res.records;
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
