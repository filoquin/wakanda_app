import { Component, OnInit } from "@angular/core";
import { SaleOrderService } from "../../../_services/sale-order.service";

@Component({
	selector: "app-prices-list",
	templateUrl: "./prices-list.component.html",
	styleUrls: ["./prices-list.component.css"],
})
export class PricesListComponent implements OnInit {
	prices: any = [];

	constructor(private saleOrderService: SaleOrderService) {}
	ngOnInit(): void {
		this.saleOrderService
			.getCategoriesPrices()
			.then((res) => {
				console.log(res.records);
				this.prices = res.records;
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
