import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { BrowserModule } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { UserService } from "../../_services/user.service";

@Component({
	selector: "app-welcome-video",
	templateUrl: "./welcome-video.component.html",
	styleUrls: ["./welcome-video.component.css"],
})
export class WelcomeVideoComponent implements OnInit {
	safeURL;
	constructor(
		private userService: UserService,
		private router: Router,
		private _sanitizer: DomSanitizer
	) {}
	ngOnInit(): void {
		this.userService.getWelcomevideo().then((res) => {
			this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(res);
		});
	}

	endWelcome() {
		this.router.navigateByUrl("/");
	}
}
