import {HostListener , Component, OnInit} from '@angular/core';
import {ProductSelectComponent} from '../product-select/product-select.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {SaleOrderService} from '../../../_services/sale-order.service';
import {Route, Router} from "@angular/router";
import {PlatformLocation} from "@angular/common";
import {ToastrService} from "ngx-toastr";
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  bsModalRef: BsModalRef;
  categories: any = [];
  minHeight = 20;
  rowMinHeight = 20;
  public total: any = {quantity: 0, amount: 0, gain: 0};
  private productsSelected: any = [];

  constructor(private saleOrderService: SaleOrderService, private bsModalService: BsModalService, private router: Router , private platformLocation: PlatformLocation, private toastrService: ToastrService ) {
    if (localStorage.getItem('tmpOrder') ) {
      console.log('loading data...');
      this.productsSelected = JSON.parse(localStorage.getItem('tmpOrder'));
      this.updateTotal();
    }
    platformLocation.onPopState(() => this.bsModalService.hide(1));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      this.computeHeigths();
  }
  ngOnInit(): void {
    this.computeHeigths();
    this.saleOrderService.getCategories()
      .then((res) => {
        this.categories = res.records;
        if (res.length< 1){
        this.router.navigate(['/login']);
        }

      })
      .catch((err) => {
        alert(err);
        this.router.navigate(['/login']);

        console.log(err);
      });

  }



  showProducts(category) {
    let oldProductsSelected = null;
    this.productsSelected.forEach(tps => {
      if (tps.category.id === category.id) {
        oldProductsSelected = tps.productsSelected;
      }
    });
    const initialState = {
      category, oldProductsSelected
    };
    this.bsModalRef = this.bsModalService.show(ProductSelectComponent, {initialState, class: 'product-select'});
    this.bsModalRef.content.event.subscribe(result => {

      if (result.status === 'OK') {


        // Busco la categoria seleccionada y actualizo los productos seleccionados
        let notfound = true;
        this.productsSelected.forEach(ps => {
          if (ps.category.id === category.id) {
            ps.productsSelected = result.productsSelected;
            notfound = false;
          }
        });
        // Si no hay productos para la categoria seleccionada los agrego
        if (notfound) {
          if (result.productsSelected.length > 0) {
            const tmpCategorySelected = {category: null, productsSelected: null};
            tmpCategorySelected.category = category;
            tmpCategorySelected.productsSelected = result.productsSelected;
            this.productsSelected.push(tmpCategorySelected);
          }
        }


        this.updateTotal();
      }
    });
  }

  next() {
    if (this.productsSelected.length > 0) {
      localStorage.setItem('tmpOrder', JSON.stringify(this.productsSelected));
      this.router.navigate(['/orders/summary']);
    } else {
      this.toastrService.warning('No selecciono ningun producto');
    }

  }

  computeHeigths(){
    const outerHeight = window.outerHeight;
    const yTitleHeigtht = document.getElementById('title').offsetHeight ;
    const ySummaryHeight = document.getElementById('summary').offsetHeight;
    this.minHeight = outerHeight - ySummaryHeight - ySummaryHeight - 150;
    this.rowMinHeight = this.minHeight/3; 
 
  }
  
  private updateTotal() {
    this.total.amount = 0;
    this.total.gain = 0;
    this.total.quantity = 0;

    this.productsSelected.forEach(tps => {
      tps.productsSelected.forEach(item => {
        this.total.amount += item.qty_select * item.user_price;
        this.total.gain += (item.qty_select * item.final_price) - (item.qty_select * item.user_price);
        this.total.quantity += item.qty_select;
      });
    });
  }


  clearOrder(){
    var clear =  confirm("??Desea vaciar la orden?");
    if (clear){
        this.productsSelected = []; 
        this.total.amount = 0;
        this.total.gain = 0;
        this.total.quantity = 0;

      }
    
  }
}
