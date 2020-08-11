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
			["name", "display_name"]
		);
	}

	getProducts(categoryId) {
    return this.odooRPC.searchRead(
      "product.template",
      [["wak_published", "=", true], ["categ_id", "child_of", categoryId]],
      ["default_code", "name", "display_name","qty_available","list_price","final_price","price"]
    );
	}

	createSaleOrder(lines){
		return this.odooRPC
			.call(
				"sale.order",
				"wkn_create",
				[lines],
				{}
			)
			.then((order) => {
				console.log(order)
			});

	}

	getPromos(orderId){
		return this.odooRPC
			.call(
				"sale.order",
				"get_promos",
				[[orderId]],
				{}
			)
			.then((promos) => {
				console.log(promos)
			});
	}

	getCarriers(orderId){
		return this.odooRPC
			.call(
				"sale.order",
				"read_delivery_methods",
				[[orderId]],
				{}
			)
			.then((carriers) => {
				console.log(carriers)
			});
	}
	deliveryConfirm(orderId,carrier_id,price){
		return this.odooRPC
			.call(
				"sale.order",
				"delivery_confirm",
				[[orderId],[carrier_id,price]],
				{}
			)
			.then((carriers) => {
				console.log(carriers)
			});
	}



}
