import { Component, OnInit } from "@angular/core";
import { SaleOrderService } from "../../../_services/sale-order.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-order-delivery",
  templateUrl: "./order-delivery.component.html",
  styleUrls: ["./order-delivery.component.css"],
})
export class OrderDeliveryComponent implements OnInit {
  constructor(
    private actRoute: ActivatedRoute,
    private saleOrderService: SaleOrderService,
    private router: Router
  ) {}
  carriers: any = [];
  orderId: number;

  ngOnInit(): void {
    this.orderId = Number(this.actRoute.snapshot.paramMap.get("id"));
    this.getCarriers(this.orderId);
  }
  getCarriers(orderId) {
    this.saleOrderService
      .getCarriers(orderId)
      .then((res) => {
        console.log(res);
        this.carriers = res;
      })
      .catch((err: any) => {
        console.log("errors" + err);
      });
  }
  selectCarrier(carrier) {
    this.saleOrderService
      .deliveryConfirm(this.orderId, carrier.id, carrier.amount)
      .then((res) => {
        this.router.navigate(["/orders/confirm/"+ this.orderId]);
        })
      .catch((err: any) => {
        console.log("errors" + err);
      });
  }
}
