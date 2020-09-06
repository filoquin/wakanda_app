import { Injectable } from '@angular/core';
import {OdooRPCService} from './odoorcp.service';

@Injectable({
  providedIn: 'root'
})
export class WknPromoService {

  constructor(public odooRPC: OdooRPCService) {
  }

  getPromo() {
		return this.odooRPC
			.call("wak.promo", "list_promos", [], {});
	}


}
