import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { Router } from '@angular/router';

import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  currentUser: User;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private authenticationService: AuthenticationService
    ){
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
 
  }
    
  title = 'loputoo';


  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#d3d3d3';
 }

 logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}
}
