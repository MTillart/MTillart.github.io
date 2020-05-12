import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
  MatFormFieldModule, MatRadioModule, MatSelectModule, MatSliderModule, 
  MatSlideToggleModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatIconModule, MatNativeDateModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { IsikudComponent } from './isikud/isikud.component';
import { DokumendidComponent } from './dokumendid/dokumendid.component';
import { ToimikudComponent } from './toimikud/toimikud.component';
import { AjaarvestusComponent } from './ajaarvestus/ajaarvestus.component';
import { KalenderPopUpComponent } from './kalender-pop-up/kalender-pop-up.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_error.interceptor';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDateAdapter } from './_helpers/custom-date-adapter';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IsikuPopUpComponent } from './isiku-pop-up/isiku-pop-up.component';
import { LisaIsikPopUpComponent } from './lisa-isik-pop-up/lisa-isik-pop-up.component';
import { TokenInterceptor } from './_services/interceptor.service';
import { TimerComponent } from './timer/timer.component';
//import { NgbdTimepickerBasicModule } from './kalender-pop-up/timepicker-basic.module'




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SearchComponent,
    IsikudComponent,
    DokumendidComponent,
    ToimikudComponent,
    AjaarvestusComponent,
    KalenderPopUpComponent,
    LoginComponent,
    RegisterComponent,
    IsikuPopUpComponent,
    LisaIsikPopUpComponent,
    TimerComponent,
  ],
  entryComponents: [
    KalenderPopUpComponent,
    IsikuPopUpComponent,
    LisaIsikPopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
    MatNativeDateModule,
    
    HttpClientModule,
    NgbModule,
    //NgbdTimepickerBasicModule

  ],
  providers: [
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        {provide: MAT_DATE_LOCALE, useValue: 'est'},
        {provide: DateAdapter, useClass: CustomDateAdapter },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
