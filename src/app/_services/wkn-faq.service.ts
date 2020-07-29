import { Injectable } from "@angular/core";
import { OdooRPCService } from "./odoorcp.service";

@Injectable({
  providedIn: 'root'
})



export class WknFaqService {
	constructor(public odooRPC: OdooRPCService) {}

	getFaqs() {
		return this.odooRPC.searchRead(
			"wkn.faq",
			[["wkn_publish", "=", true]],
			["name", "display_name"]
		);
	}

}
