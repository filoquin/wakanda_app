import { Component, OnInit, Input } from "@angular/core";
import { SaleOrderService } from "../../../_services/sale-order.service";

@Component({
	selector: "app-prices-templates",
	templateUrl: "./prices-templates.component.html",
	styleUrls: ["./prices-templates.component.css"],
})
export class PricesTemplatesComponent implements OnInit {
	@Input() categoryId: any;
	templates: any = [];

	constructor(private saleOrderService: SaleOrderService) {}

	ngOnInit(): void {
		this.saleOrderService
			.getCategoriesTemplate(this.categoryId.id)
			.then((res) => {
				this.templates = res.records;
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
