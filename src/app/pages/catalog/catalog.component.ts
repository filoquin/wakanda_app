import { Component, OnInit } from '@angular/core';
import {WakCatalogService} from "../../_services/wak-catalog.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public catalogs: any = null;
  public images: any = null;
  constructor(private WakCatalogService: WakCatalogService) {
  }

  ngOnInit(): void {
    this.WakCatalogService.getCatalog()
      .then((res) => {
        console.log(res['pdf']);
        this.catalogs = res;
      })
      .catch((err: any) => {
        console.log('errors' +  err);
      });

  }

}
