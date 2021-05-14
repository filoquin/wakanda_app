import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../../_services/user.service";
import { Router } from "@angular/router";


@Component({
	selector: "app-profile",
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
	constructor(
		private router: Router,
		private userService: UserService
		) {}
	profile = {}
	ngOnInit(): void {
		this.userService.getProfile()
			.then((res) => {
				this.profile = res
			})
			.catch((err) => {
			
				console.log(err);
				console.log('aca');
				this.router.navigate(['/login']);

			});
	}
	closeSession(){
		this.userService.logout();

	}
}
