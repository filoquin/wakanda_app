import { Injectable } from "@angular/core";
import { OdooRPCService } from "./odoorcp.service";

@Injectable({
    providedIn: "root",
})
export class SaleOrderService {
    constructor(public odooRPC: OdooRPCService) {}

    getCategoriesPrices() {
        return this.odooRPC.searchRead(
            "product.category",
            [["wkn_publish", "=", true]],
            ["name", "display_name", "user_price", "final_price","wkn_description"]
        );
    }

    getSaleRank() {
        return this.odooRPC.searchRead(
            "sale.rank",
            [["rank", "<=", 10]],
            ["wkn_app_categ_id", "category_name", "name", "product_id", "rank"]
        );
    }

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
            [   ['qty_available', '>', 0],
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

    createSaleOrder(lines,code) {
        console.log('code',code);
        return this.odooRPC.call("sale.order", "wkn_create", [lines,code],{'context':{'display_default_code':false}},);
    }

    getPromos(orderId) {
        return this.odooRPC.call("sale.order", "read_promos", [[orderId]],{'context':{'display_default_code':false}},);
    }

    selectPromo(promoId,count=false) {
        return this.odooRPC.call(
            "sale.order.promo",
            "add_promo_read_promos",
            [[promoId],count],
            {}
        );
    }

    getCarriers(orderId) {
        return this.odooRPC.call(
            "sale.order",
            "read_delivery_methods",
            [[orderId]],
            {}
        );
    }
    deliveryConfirm(orderId, carrier_id, price) {
        return this.odooRPC.call(
            "sale.order",
            "wkn_delivery_confirm",
            [[orderId], carrier_id, price],
            {}
        );
    }
    getOrder(orderId) {
        return this.odooRPC.call(
            "sale.order",
            "read",
            [[orderId], ["name", "display_name", "date_order", "amount_total"]],
            {}
        );
    }

    getOrderLines(orderId) {
        return this.odooRPC.searchRead(
            "sale.order.line",
            [["order_id", "=", orderId]],
            ["name", "product_id", "discount", "product_uom_qty", "price_total"]
            ,  100,0,{'display_default_code':false},

        );
    }
    getMyOrders() {
        return this.odooRPC.searchRead(
            "sale.order",
            [],
            ["name", "display_name", "state",  "date_order", "amount_total"],
            50,
            0,
            {'display_default_code':false},
            "create_date desc"
        );
    }
}
    