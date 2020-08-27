import { Injectable } from "@angular/core";
import { OdooRPCService } from "./odoorcp.service";

@Injectable({
	providedIn: "root",
})
export class SaleOrderService {
	constructor(public odooRPC: OdooRPCService) {}

	getCategories() {
		return this.odooRPC.searchRead(
			"product.category",
			[["wkn_publish", "=", true]],
			["name", "display_name", "wkn_categ_image"]
		);
	}

	getProducts(categoryId) {
		return this.odooRPC.searchRead(
			"product.template",
			[
				["wak_published", "=", true],
				["categ_id", "child_of", categoryId],
			],
			[
				"default_code",
				"name",
				"display_name",
				"qty_available",
				"list_price",
				"final_price",
				"user_price",
			]
		);
	}

	createSaleOrder(lines) {
		return this.odooRPC
			.call("sale.order", "wkn_create", [lines], {})
			.then((order) => {
				return order;
			});
	}

	getPromos(orderId) {
		return this.odooRPC
			.call("sale.order", "read_promos", [[orderId]], {})
			.then((promos) => {
				return promos;
			});
	}

	selectPromo(promoId) {
		return this.odooRPC
			.call("sale.order.promo", "add_promo_read_promos", [[promoId]], {})
			.then((promos) => {
				return promos;
			});
	}



	getCarriers(orderId) {
		return this.odooRPC
			.call("sale.order", "read_delivery_methods", [[orderId]], {})
			.then((carriers) => {
				return carriers;
			});
	}
	deliveryConfirm(orderId, carrier_id, price) {
		return this.odooRPC
			.call(
				"sale.order",
				"wkn_delivery_confirm",
				[[orderId], carrier_id, price],
				{}
			);

	}
	confirm(orderId) {
		return this.odooRPC
			.call("sale.order", "action_confirm", [[orderId]], {})
			.then((state) => {
				return state;
			});
	}
}
