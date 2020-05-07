import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenPayload } from '../_models/user';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Client } from '../_models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  listOfClients: Client[];

  constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) { }

  public getAllClients(): Observable<Client[]> {
  
    return this.http.get<Client[]>(environment.apiUrl +`/clients`);

  }

  public addClient(client: Client): Observable<any> {
    console.log("??????");
    console.log("Adding client");   

    return this.http.post<Client>(environment.apiUrl +`/client`, client);
    
  }
  public getClient(clientId){
    return this.http.get<Client>(environment.apiUrl +`/client/${clientId}`);
  }
  public changeClient(clientId: string, client: Client): Observable<any>{

    return this.http.put<Client>(environment.apiUrl +`/client/${clientId}`, client);

  }
  public deleteClient(clientId): Observable<void>{

    return this.http.delete<void>(environment.apiUrl +`/client/${clientId}`, { responseType: 'text' as 'json'});

  }


}
