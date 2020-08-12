import {Component, OnInit} from '@angular/core';
import {ProductSelectComponent} from '../product-select/product-select.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {SaleOrderService} from '../../../_services/sale-order.service';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  bsModalRef: BsModalRef;
  categories: any = [];
  public total: any = {quantity: 0, amount: 0, gain: 0};
  private productsSelected: any = [];

  constructor(private saleOrderService: SaleOrderService, private bsModalService: BsModalService, private router: Router) {
    if(localStorage.getItem('tmpOrder')){
      this.productsSelected = JSON.parse(localStorage.getItem('tmpOrder'));
      this.updateTotal();
    }
  }

  ngOnInit(): void {
    this.saleOrderService.getCategories()
      .then((res) => {
        console.log(res);
        this.categories = res.records;
      })
      .catch((err: any) => {
      });

  }


  showProducts(category) {
    let oldProductsSelected = null;
    this.productsSelected.forEach(tps => {
      if (tps.category.id === category.id) {
        oldProductsSelected =  tps.productsSelected ;
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
          const tmpCategorySelected = {category: null, productsSelected: null};
          tmpCategorySelected.category = category;
          tmpCategorySelected.productsSelected = result.productsSelected;
          this.productsSelected.push(tmpCategorySelected);
        }


       this.updateTotal();
      }
    });
  }

  next() {
    console.log(this.productsSelected.length)
    if ( this.productsSelected.length > 0) {
      localStorage.setItem('tmpOrder', JSON.stringify(this.productsSelected));
      this.router.navigate(['/orders/summary']);
    } else {
      alert('No selecciono ningun producto');
    }

  }

  private updateTotal() {
    this.total.amount = 0;
    this.total.gain = 0;
    this.total.quantity = 0;

    this.productsSelected.forEach(tps => {
      tps.productsSelected.forEach(item => {
        this.total.amount += item.qty_select * item.final_price;
        this.total.gain += (item.qty_select * item.final_price) - (item.qty_select * item.user_price);
        this.total.quantity += item.qty_select;
      });
    });
  }
}
