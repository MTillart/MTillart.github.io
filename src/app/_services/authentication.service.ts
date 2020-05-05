import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User, TokenResponse, TokenPayload } from '../_models/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private token: string;

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  public logout(){
    this.token = '';
    window.localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  public getUserDetails(): User {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);      
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {    
       user.exp = Date.now() / 1000;
      return true;
    } else {
      return false;
    }
  }

  private request(method: 'post'|'get', type: 'login'|'register', user?: TokenPayload): Observable<any> {
    let base;
  
    if (method === 'post') {
      base = this.http.post(environment.apiUrl +`/user/${type}`, user);
    } else {
      base = this.http.get(`/user/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }
  
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
     
        }
        return data;
      })
    );
  
    return request;
  }
  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }
  
  public login(user: TokenPayload): Observable<any> {
   const loggedIn = this.isLoggedIn();
   console.log("LoggedIN??? "+loggedIn);
   
    return this.request('post', 'login', user);
  }


}