import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
	safeURL;

  constructor(private _sanitizer: DomSanitizer) {

  		this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1514305532023!2d-65.78385878492097!3d-28.47498588248014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942428c3d2eae0f7%3A0x9247106ef58806bb!2sP%C3%A9rez%20de%20Zurita%20351%2C%20San%20Fernando%20del%20Valle%20de%20Catamarca%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1600469677824!5m2!1ses-419!2sar');
 }

  ngOnInit(): void {
  }

}

