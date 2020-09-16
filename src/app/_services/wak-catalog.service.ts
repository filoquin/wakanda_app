import { Injectable } from '@angular/core';
import {OdooRPCService} from './odoorcp.service';

@Injectable({
  providedIn: 'root'
})
export class WakCatalogService {

  constructor(public odooRPC: OdooRPCService) {
  }

  getCatalog() {
		return this.odooRPC
			.call("wak.catalog", "list_catalog", [], {});
	}

}