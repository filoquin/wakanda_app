import { Component, OnInit } from "@angular/core";
import { SaleOrderService } from "../../../_services/sale-order.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-order-sumary",
  templateUrl: "./order-sumary.component.html",
  styleUrls: ["./order-sumary.component.css"],
})
export class OrderSumaryComponent implements OnInit {
  public order: any = null;
  public total = 0;
  private lines: any = [];
  public code:string = '';
  editForm: FormGroup;
  isSubmitted = false;

  constructor(
    private saleOrderService: SaleOrderService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toasterService: ToastrService
  ) {
    this.order = JSON.parse(localStorage.getItem("tmpOrder"));

    this.order.forEach((item) => {
      item.productsSelected.forEach((product) => {
        let line = { id: product.id, qty: product.qty_select };
        this.lines.push(line);
        this.total += product.qty_select * product.user_price;
        // this.total.gain += (product.qty_select * product.final_price) - (product.qty_select * product.user_price);
        // this.total.quantity += product.qty_select;
      });
    });
  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      disc_code: ["sss"]
    });
  }

    get formControls() {
    return this.editForm.controls;
  }

  saveOrder() {
const disc_code = this.editForm.controls.disc_code.value;
    console.log('disc_code',disc_code);
    return;
    this.saleOrderService
      .createSaleOrder(this.lines,disc_code)
      .then((res) => {
        console.log(res);
        if (res) {
          let idorder = res[0].id;
          if (res[0].show_promos) {
            this.router.navigate(["/orders/promos/" + idorder]);
          } else {
            this.router.navigate(["/orders/delivery/" + idorder]);
          }
          localStorage.removeItem("tmpOrder");
        }
      })
      .catch((err) => {
        //const errormessage = err.error.data.message;
        this.toasterService.warning('La orden no cumple con el minimo');
      });
  }
}
