import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { TimerTask } from '../_models/timerTask';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) { }

  public getAllTimedTasks(): Observable<TimerTask[]> {  
    return this.http.get<TimerTask[]>(environment.apiUrl +`/timer`);
  }

  public addTimedTask(timerData: TimerTask): Observable<any> {
    console.log("Adding timer");   
    return this.http.post<TimerTask>(environment.apiUrl +`/timer`, timerData);    
  }

  public changeTimedTask(timerId: string, timerData: TimerTask){
    return this.http.put<TimerTask>(environment.apiUrl +`/timer/${timerId}`, timerData);    
  } 

  public deleteTimedTask(timerId){
    return this.http.delete<TimerTask>(environment.apiUrl +`/timer/${timerId}`, { responseType: 'text' as 'json'});    
  }
}
