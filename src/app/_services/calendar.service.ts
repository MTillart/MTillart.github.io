import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { CalendarDate } from '../_models/calendarDate';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) { }

  public getAllCalendarDates(): Observable<CalendarDate[]> {
    return this.http.get<CalendarDate[]>(environment.apiUrl +`/calendar`);
  }

  public addCalendarDate(calendarDate: CalendarDate): Observable<any> {
    console.log("Adding calendar date");   
    return this.http.post<CalendarDate>(environment.apiUrl +`/calendar`, calendarDate);    
  }

  public getCalendarDate(calendarId){
    return this.http.get<CalendarDate>(environment.apiUrl +`/calendar/${calendarId}`);    
  }

  public changeCalendarDate(calendarId: string, calendarDate: CalendarDate){
    return this.http.put<CalendarDate>(environment.apiUrl +`/calendar/${calendarId}`, calendarDate);    
  }
 

  public deleteCalendarDate(calendarId){
    return this.http.delete<CalendarDate>(environment.apiUrl +`/calendar/${calendarId}`, { responseType: 'text' as 'json'});    
  }









}
