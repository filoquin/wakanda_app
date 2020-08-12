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
        this.orderId = Number(this.actRoute.snapshot.paramMap.get('id'))
        this.loadPromos(this.orderId);
    }
    loadPromos(orderId) {
        this.saleOrderService
            .getPromos(orderId)
            .then((res) => {
                if (res.length == 0) {
                    this.router.navigate(["/orders/delivery/" + this.orderId]);
                }
                this.promos = res;
            })
            .catch((err: any) => {
                console.log("errors" + err);
            });
    }
    selectPromo(promoId) {
        this.saleOrderService
            .selectPromo(promoId)
            .then((res) => {
                if (res.length == 0) {
                    this.router.navigate(["/orders/delivery/" + this.orderId]);
                }
                this.promos = res;
                console.log(this.promos);
            })
            .catch((err: any) => {
                console.log("errors" + err);
            });
    }
}
