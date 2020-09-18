import { Component, OnInit } from "@angular/core";
import { SaleOrderService } from "../../../_services/sale-order.service";
import { Router, ActivatedRoute } from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Component({
    selector: "app-order-confirm",
    templateUrl: "./order-confirm.component.html",
    styleUrls: ["./order-confirm.component.css"],
})
export class OrderConfirmComponent implements OnInit {
    orderId: number;
    order: any;
    orderLines: any;

    constructor(
        private actRoute: ActivatedRoute,
        private saleOrderService: SaleOrderService,
        private router: Router,
        private toasterService: ToastrService
    ) {}
    ngOnInit(): void {
        this.orderId = Number(this.actRoute.snapshot.paramMap.get("id"));
        this.getOrder(this.orderId);
    }
    getOrder(orderId) {
        this.saleOrderService
            .getOrder(orderId)
            .then((res) => {
                this.order = res[0];
            })
            .catch((err: any) => {
                console.log("errors" + err);
            });

        this.saleOrderService
            .getOrderLines(orderId)
            .then((res) => {
                this.orderLines = res['records'];
            })
            .catch((err: any) => {
                console.log("errors" + err);
            });
    }
}