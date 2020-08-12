import {Component, OnInit} from '@angular/core';
import {SaleOrderService} from "../../../_services/sale-order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-sumary',
  templateUrl: './order-sumary.component.html',
  styleUrls: ['./order-sumary.component.css']
})
export class OrderSumaryComponent implements OnInit {
  public order: any = null;
  public total = 0;
  private lines: any = [];

  constructor(private saleOrderService: SaleOrderService, private router: Router) {
    this.order = JSON.parse(localStorage.getItem('tmpOrder'));

    this.order.forEach(item => {

      item.productsSelected.forEach(product => {
        let line = {'id': product.id, 'qty': product.qty_select};
        this.lines.push(line);
        this.total += product.qty_select * product.user_price;
        // this.total.gain += (product.qty_select * product.final_price) - (product.qty_select * product.user_price);
        // this.total.quantity += product.qty_select;
      });
    });
  }

  ngOnInit(): void {
  }

  saveOrder() {
    this.saleOrderService.createSaleOrder(this.lines)
      .then((res) => {
        console.log(res);
        if(res){
          let idorder= res[0].id;
          if (res[0].show_promos){
            this.router.navigate(['/orders/promos/' + idorder]);
          }else{
            this.router.navigate(['/orders/delivery/' + idorder]);
          }
          localStorage.removeItem('tmpOrder');
        }
      })
      .catch((err: any) => {
        console.log('errors' + err);
      });
  }
}
