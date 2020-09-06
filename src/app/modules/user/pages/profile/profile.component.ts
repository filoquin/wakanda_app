import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../../_services/user.service";

@Component({
	selector: "app-profile",
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
	constructor(private userService: UserService) {}
	profile = {}
	ngOnInit(): void {
		this.userService
			.getProfile()
			.then((res) => {
				this.profile = res
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
