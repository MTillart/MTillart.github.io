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

  listOfClients: Client[];

  constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) { }

  public getAllClients(): Observable<Client[]> {
  
    return this.http.get<Client[]>(environment.apiUrl +`/clients`, { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});

  }

  public addClient(): Observable<Client> {
  
    return this.http.get<Client>(environment.apiUrl +`/client`, { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});

  }


}
