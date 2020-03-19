import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  logout(){
    console.log("Logging you out");
    this.auth.logout();
  }

}
