import { Component, OnInit } from "@angular/core";
import { SaleOrderService } from "../../../_services/sale-order.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-order-promos",
    templateUrl: "./order-promos.component.html",
    styleUrls: ["./order-promos.component.css"],
})
export class OrderPromosComponent implements OnInit {
    constructor(
        private actRoute: ActivatedRoute,
        private saleOrderService: SaleOrderService,
        private router: Router
    ) {}
    promos: any = [];
    orderId: number;
    ngOnInit(): void {
        this.orderId = Number(this.actRoute.snapshot.paramMap.get("id"));
        this.loadPromos(this.orderId);
    }
    loadPromos(orderId) {
        this.saleOrderService
            .getPromos(orderId)
            .then((res) => {
                if (res.length == 0) {
                    this.router.navigate(["/orders/delivery/" + this.orderId]);
                }

                res.forEach((p) => {
                    p.qty_select = 0;
                });

                this.promos = res;
            })
            .catch((err: any) => {
                console.log("errors" + err);
            });
    }
    selectPromo(promo) {
        this.saleOrderService
            .selectPromo(promo.id, promo.qty_select)
            .then((res) => {
                if (res.length == 0) {
                    this.router.navigate(["/orders/delivery/" + this.orderId]);
                }
                res.forEach((p) => {
                    p.qty_select = 0;
                });
                this.promos = res;
                // console.log(this.promos);
            })
            .catch((err: any) => {
                console.log("errors" + err);
            });
    }

    removeProductPromoQty(promo: any) {
        if (promo.qty_select > 0) {
            promo.qty_select -= 1;
        }
    }

    addProductPromoQty(promo: any) {
        if (promo.qty_select < promo.product_qty) {
            promo.qty_select += 1;
        }
    }
}
