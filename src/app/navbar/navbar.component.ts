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
<<<<<<< HEAD
  ) { }



  ngOnInit() {
// get theme from local storage
    if (localStorage.getItem('theme') == null) {
      console.log( "no theme in  LS");     
      this.iconTheme = "light";
      this.themeService.setLightTheme();
    } else if(localStorage.getItem('theme')=="light"){
      console.log( "Light Theme from LS"); 
      this.iconTheme = localStorage.getItem('theme');
      this.themeService.setLightTheme();
      
    }else {
      console.log( "Dark Theme from LS"); 
      this.iconTheme = localStorage.getItem('theme');
      this.themeService.setDarkTheme();
    }

    this.user = this.auth.getUserDetails();
  }


  logout() {
=======
    ) { }

    

  ngOnInit() {
    this.iconTheme = "light";
    this.user= this.auth.getUserDetails();
  }


  logout(){
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
    console.log("Logging you out");
    this.auth.logout();
  }
  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
      this.iconTheme = "light";
<<<<<<< HEAD
      localStorage.setItem('theme', "light");
    } else {
      this.themeService.setDarkTheme();
      this.iconTheme = "dark";
      localStorage.setItem('theme', "dark");
    }

=======
    } else {
      this.themeService.setDarkTheme();
      this.iconTheme = "dark";
    }
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
  }

}
