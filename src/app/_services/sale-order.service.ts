import {Injectable} from '@angular/core';
import {OdooRPCService} from './odoorcp.service';

@Injectable({
  providedIn: 'root',
})
export class SaleOrderService {
  constructor(public odooRPC: OdooRPCService) {
  }

  getCategories() {
    return this.odooRPC.searchRead(
      'product.category',
      [['wkn_publish', '=', true]],
      ['name', 'display_name']
    );
  }

  getProducts(categoryId) {
    return this.odooRPC.searchRead(
      'product.template',
      [['wak_published', '=', true], ['categ_id', 'child_of', categoryId]],
      ['default_code', 'name', 'display_name', 'qty_available', 'list_price', 'price']
    );
  }
}
