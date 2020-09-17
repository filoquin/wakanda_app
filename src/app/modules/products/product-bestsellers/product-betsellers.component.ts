import { Component, OnInit } from "@angular/core";
import { SaleOrderService } from "../../../_services/sale-order.service";

@Component({
  selector: "app-product-betsellers",
  templateUrl: "./product-betsellers.component.html",
  styleUrls: ["./product-betsellers.component.css"],
})
export class ProductBestsellersComponent implements OnInit {
  public bestsellers: any = [];

   lastCategoryName: string = '';

  constructor(private saleOrderService: SaleOrderService) {}
  ngOnInit(): void {
    this.saleOrderService
      .getSaleRank()
      .then((res) => {
        console.log(res.records);
        //this.bestsellers = res.records;
        this.sortAndFillByCategory(res.records);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  sortAndFillByCategory(lines){
    const categories = [];
    //Filter unique categories
    lines.forEach(line => {
       if ( !categories.find(c => c === line.category_name)){
         categories.push(line.category_name);
      }
    });
    console.log(categories);
    categories.forEach(category => {
      let item = {
          category,
          products : []
      };
      lines.forEach(line => {
        item.category = category;
        if ( category === line.category_name){
          item.products.push(line);
        }
      });
      this.bestsellers.push(item);
    });


    console.log(this.bestsellers);
  }
}
