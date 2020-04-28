import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { ThemeService } from "src/app/theme/theme.service";
import { User } from '../_models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  iconTheme: string;
  user: User;

  constructor(
    public auth: AuthenticationService,
    private router: Router,
    private themeService: ThemeService
    ) { }

    

  ngOnInit() {
    this.iconTheme = "light";
    this.user= this.auth.getUserDetails();
  }


  logout(){
    console.log("Logging you out");
    this.auth.logout();
  }
  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
      this.iconTheme = "light";
    } else {
      this.themeService.setDarkTheme();
      this.iconTheme = "dark";
    }
  }

}
