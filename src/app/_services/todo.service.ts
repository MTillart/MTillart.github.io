import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { To_Do } from '../_models/to_do';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) { }

  public getAllToDos(): Observable<To_Do[]> {  
    return this.http.get<To_Do[]>(environment.apiUrl +`/todo`);
  }

  public addToDo(todoData: To_Do): Observable<any> {
    console.log("Adding todo");   
    return this.http.post<To_Do>(environment.apiUrl +`/todo`, todoData);    
  }

  public changeToDo(todoId: string, todoData: To_Do){
    return this.http.put<To_Do>(environment.apiUrl +`/todo/${todoId}`, todoData);    
  } 

  public deleteTo_Do(todoId){
    return this.http.delete<To_Do>(environment.apiUrl +`/todo/${todoId}`, { responseType: 'text' as 'json'});    
  }
}
