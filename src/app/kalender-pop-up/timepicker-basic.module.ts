<<<<<<< HEAD
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
  MatFormFieldModule, MatRadioModule, MatSelectModule, MatSliderModule, 
  MatSlideToggleModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatIconModule, MatNativeDateModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { registerLocaleData } from '@angular/common';
  import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr-FR' is optional
registerLocaleData(localeFr, 'est');
  


import { KalenderPopUpComponent } from './kalender-pop-up.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    BrowserModule, FormsModule, NgbModule,MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
    MatFormFieldModule, MatRadioModule, MatSelectModule, MatSliderModule, 
    MatSlideToggleModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
    MatSortModule, MatTableModule, MatIconModule, MatNativeDateModule, ReactiveFormsModule,
    BrowserAnimationsModule, 
    CommonModule

  ],
  declarations: [KalenderPopUpComponent],
  exports: [KalenderPopUpComponent],
  bootstrap: [KalenderPopUpComponent],
  entryComponents: [
    KalenderPopUpComponent,
  ],

=======
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTimepickerBasic } from './timepicker-basic';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [NgbdTimepickerBasic],
  exports: [NgbdTimepickerBasic],
  bootstrap: [NgbdTimepickerBasic]
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
})
export class NgbdTimepickerBasicModule {
  
}
