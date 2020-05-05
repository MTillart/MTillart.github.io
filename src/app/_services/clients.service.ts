import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenPayload } from '../_models/user';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Client } from '../_models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) { }

  public getAllClients(): Observable<any> {
    console.log("Getting the clients data...");
    
    const loggedIn = this.auth.isLoggedIn();
    console.log("LoggedIN??? "+loggedIn);
    
     return this.request();
   }

   private request(): Observable<any> {
    let base;

    console.log("Requesting data...");
    
    
    base = this.http.get(environment.apiUrl +`/clients`, { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});

  
    const request = base.pipe(
      map((data: Array<Client>) => {
        if (Client) {
          console.log("Returning Array");
          
          return Array<Client>();
     
        }
        console.log("There was error");
        
        return console.error();
        
      })
    );
  
    return request;
  }


}
