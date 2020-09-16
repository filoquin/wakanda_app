import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
	selector: "app-welcome-video",
	templateUrl: "./welcome-video.component.html",
	styleUrls: ["./welcome-video.component.css"],
})
export class WelcomeVideoComponent implements OnInit {
	safeURL;
	constructor( private router: Router, private _sanitizer: DomSanitizer) {
		this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/iAPwOPzD20k');
	}
	ngOnInit(): void {}

	endWelcome(){
		        this.router.navigateByUrl('/');

	}
}

