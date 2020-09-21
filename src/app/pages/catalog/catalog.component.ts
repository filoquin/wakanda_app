import { Component, OnInit } from '@angular/core';
import {WakCatalogService} from "../../_services/wak-catalog.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public catalogs: any = null;
  public images: any = null;
  constructor(private WakCatalogService: WakCatalogService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this.WakCatalogService.getCatalog()
      .then((res) => {
        this.catalogs = res;
        this.spinner.hide();
      })
      .catch((err: any) => {
        console.log('errors' +  err);
        this.spinner.hide();
      });

  }

}
