import { Component, OnInit, Inject } from '@angular/core';
<<<<<<< HEAD
import { MAT_DIALOG_DATA, MatDialogRef, MatCalendarCellCssClasses } from "@angular/material";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Time } from '../_models/time';
import { group } from 'console';
import { CalendarDate } from '../_models/calendarDate';
import { CalendarService } from '../_services/calendar.service';
=======
import {MAT_DIALOG_DATA, MatDialogRef, MatCalendarCellCssClasses} from "@angular/material";
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { To_Do } from '../_models/to_do';
import { Time } from '../_models/time';
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194

@Component({
  selector: 'app-kalender-pop-up',
  templateUrl: './kalender-pop-up.component.html',
  styleUrls: ['./kalender-pop-up.component.scss']
})
export class KalenderPopUpComponent implements OnInit {

  form: FormGroup;
  task: string;
<<<<<<< HEAD
  dataArray: Array<CalendarDate>;
  time = { hour: 13, minute: 30 };

  theDate: Date = new Date();
  theHour: number = 13;
  theMinutes: number = 30;
=======
  dataArray: Array<To_Do>;
  time = {hour: 13, minute: 30};

  theDate: Date;
  theHour: number;
  theMinutes: number;
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194

  eventDate: any;
  eventTime: any;
  testDate: any;
<<<<<<< HEAD
  selectedDate: Date;
  dateToSend: CalendarDate;
  editCalendar: boolean;
  calendarEditData: CalendarDate;

  datesToHighlight: Date[] = [];

=======

  datesToHighlight = ["2020-03-22T18:30:00.000Z", "2020-03-10T18:30:00.000Z", "2020-03-05T18:30:00.000Z", "2020-03-28T18:30:00.000Z", "2020-03-14T18:30:00.000Z", "2020-03-31T18:30:00.000Z", "2020-03-08T18:30:00.000Z", "2020-03-15T18:30:00.000Z"];
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<KalenderPopUpComponent>,
<<<<<<< HEAD
    private calendarService: CalendarService,
    @Inject(MAT_DIALOG_DATA) data) {



    if (data.editing == true) {
      console.log("EDITING");
      this.editCalendar = true;
      this.calendarEditData = data;
      
      this.theHour= parseInt(this.calendarEditData.obj.time.substring(0,2));
      this.theMinutes= parseInt(this.calendarEditData.obj.time.split(":").pop());
      this.time = { hour: this.theHour, minute: this.theMinutes };
      this.theDate = this.calendarEditData.obj.eventDate;


    } else {
      this.editCalendar = false;
      this.dataArray = data;
      this.dataToHighLight();
    }


  }
  ngOnInit() {
    if(this.editCalendar){
      this.form = this.fb.group({
      task: [this.calendarEditData.obj.task, Validators.required],
      eventDate: [''],
    })
    }else{
      this.form = this.fb.group({
        task: ['', Validators.required],
        eventDate: [''],
      })

    }
  };

  dataToHighLight() {
    this.dataArray.forEach(element => {
      let thisDate = new Date(element.eventDate);
      this.datesToHighlight.push(thisDate)

    });

  }

  save() {
    const time = this.theHour + ":" + this.theMinutes;
    this.dateToSend = new CalendarDate(
      this.theDate,
      this.form.get('task').value,
      time
    )
    this.calendarService.addCalendarDate(this.dateToSend)
      .toPromise()
      .then(
        data => {
          console.log("sündmus salvestatud");

        },
        err => {
          throw (err)
        })
    this.dialogRef.close(this.form.value);

=======
    @Inject(MAT_DIALOG_DATA) data) {

      this.form = new FormGroup({
      task: new FormControl(),
      eventDate: new FormControl(new  Date()),
    })

      this.dataArray = data;
      //console.log(this.dataArray);
    
}
  ngOnInit() {


    
  }

  save() {
    console.log("saving");
    if (!this.theDate){
      console.log("No date selected");
      this.theDate = new Date();
      console.log(this.theDate);

      
     
    }else if (!this.theHour ){
      console.log("No hour selected");
      this.theHour = this.time.hour;
    }else if (!this.theMinutes){
      console.log("No time selected");
      this.theMinutes = this.time.minute;
    }else {
      console.log("All selected");
      
    }

    console.log("adding time...");
    

    this.theDate.setHours(this.theHour);
    this.theDate.setMinutes(this.theMinutes);

    this.form.get('eventDate').setValue(this.theDate);

    console.log(this.form.value);


    this.dialogRef.close(this.form.value);
   
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
  }


  close() {
<<<<<<< HEAD
    this.dialogRef.close();
  }
  saveChanges(calendarId){
    const time = this.theHour + ":" + this.theMinutes;
    console.log(time);

    this.dateToSend = new CalendarDate(
      this.theDate,
      this.form.get('task').value,
      time
    )
    this.calendarService.changeCalendarDate(calendarId, this.dateToSend)
      .toPromise()
      .then(
        data => {
          console.log("Sündmus muudetud");
        },
        err => {
          throw (err)
        })


    this.dialogRef.close(this.form.value);

  }


=======
      this.dialogRef.close();
  }

  onSelect(event){
    console.log(event);
  }

>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight
        .map(strDate => new Date(strDate))
        .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
<<<<<<< HEAD

=======
      
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
      return highlightDate ? 'special-date' : '';
    };
  }

<<<<<<< HEAD
  getSelectedDate(event) {
    this.theDate = event;
  }
  logTime(event) {

    this.theHour = event.hour;
    this.theMinutes = event.minute;

  }

}

=======
  getSelectedDate(event){
    //event.setHour(12);
    this.theDate = event;
    //this.theDate.setHours(5);

    //this.form.get('eventDate').setValue(event);
  }
  logTime(event){
    this.theHour = event.hour;
    this.theMinutes = event.minute;
    
  }

}
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
