import { Component, OnInit } from "@angular/core";
import { SaleOrderService } from "../../../_services/sale-order.service";

@Component({
	selector: "app-order-list",
	templateUrl: "./order-list.component.html",
	styleUrls: ["./order-list.component.css"],
})
export class OrderListComponent implements OnInit {
	orders = []
	constructor(private saleOrderService: SaleOrderService) {}

	ngOnInit(): void {
		this.saleOrderService.getMyOrders()
		.then((res) => {
			console.log(res);
                this.orders = res['records'];
            })
            .catch((err: any) => {
                console.log("errors" + err);
            });

	}
	clickToggle(event,order) {
    console.log('clickeando');
    if (! event.target.classList.contains('rotate-img')) {
      event.target.classList.add('rotate-img');
      event.target.classList.remove('reverse-rotate-img');
		this.saleOrderService.getOrderLines(order['id'])
		.then((res) => {
			console.log(res);
                order['orderLines'] = res['records'];
            })
            .catch((err: any) => {
                console.log("errors" + err);
            });


          console.log(order);

    }else{
      event.target.classList.add('reverse-rotate-img');
      event.target.classList.remove('rotate-img');

    }
  }
}
