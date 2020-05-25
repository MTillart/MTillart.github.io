import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgModule, LOCALE_ID } from '@angular/core';
=======
import { NgModule } from '@angular/core';
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
  MatFormFieldModule, MatRadioModule, MatSelectModule, MatSliderModule, 
<<<<<<< HEAD
  MatSlideToggleModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
=======
  MatSlideToggleModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
  MatSortModule, MatTableModule, MatIconModule, MatNativeDateModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { IsikudComponent } from './isikud/isikud.component';
import { DokumendidComponent } from './dokumendid/dokumendid.component';
import { ToimikudComponent } from './toimikud/toimikud.component';
import { AjaarvestusComponent } from './ajaarvestus/ajaarvestus.component';
<<<<<<< HEAD
//import { KalenderPopUpComponent } from './kalender-pop-up/kalender-pop-up.component';
=======
import { KalenderPopUpComponent } from './kalender-pop-up/kalender-pop-up.component';
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
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
<<<<<<< HEAD
import { NgbdTimepickerBasicModule } from './kalender-pop-up/timepicker-basic.module';
import { registerLocaleData, NgLocalization, NgLocaleLocalization } from '@angular/common';
import localeEe from '@angular/common/locales/et';
import localeEeExtra from '@angular/common/locales/extra/et';

registerLocaleData(localeEe, localeEeExtra);
=======
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194




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
<<<<<<< HEAD
    //KalenderPopUpComponent,
=======
    KalenderPopUpComponent,
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
    LoginComponent,
    RegisterComponent,
    IsikuPopUpComponent,
    LisaIsikPopUpComponent,
<<<<<<< HEAD
    TimerComponent

  ],
  entryComponents: [
    //KalenderPopUpComponent,
=======
    TimerComponent,
  ],
  entryComponents: [
    KalenderPopUpComponent,
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
    IsikuPopUpComponent,
    LisaIsikPopUpComponent,
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
=======
    AppRoutingModule,
    BrowserAnimationsModule,
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
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
<<<<<<< HEAD
    
    HttpClientModule,
    NgbModule,
    NgbdTimepickerBasicModule

  ],
  exports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule
=======
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194

  ],
  providers: [
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        {provide: MAT_DATE_LOCALE, useValue: 'est'},
        {provide: DateAdapter, useClass: CustomDateAdapter },
<<<<<<< HEAD
        { provide: NgLocalization, useClass: NgLocaleLocalization },
        { provide: LOCALE_ID, useValue: 'et' }
=======
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
