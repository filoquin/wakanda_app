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


  		this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1495115652715!2d-65.78696698492095!3d-28.475043682480166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa7216277101c13a!2sP%C3%A9rez%20de%20Zurita%2099-199%2C%20San%20Fernando%20del%20Valle%20de%20Catamarca%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1600198204393!5m2!1ses-419!2sar');
 }

  ngOnInit(): void {
  }

}

