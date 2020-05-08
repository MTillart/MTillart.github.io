import { Component, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { Router } from '@angular/router';

import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentUser: User;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    public auth: AuthenticationService
    ){}
    
  title = 'loputoo';
  ngOnInit(){
    console.log("INIT");
    this.currentUser= this.auth.getUserDetails();
    console.log("CU: "+this.currentUser);
        

  }

}
