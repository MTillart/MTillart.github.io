import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatCalendarCellCssClasses } from "@angular/material";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Time } from '../_models/time';
import { group } from 'console';
import { CalendarDate } from '../_models/calendarDate';
import { CalendarService } from '../_services/calendar.service';

@Component({
  selector: 'app-kalender-pop-up',
  templateUrl: './kalender-pop-up.component.html',
  styleUrls: ['./kalender-pop-up.component.scss']
})
export class KalenderPopUpComponent implements OnInit {

  form: FormGroup;
  task: string;
  dataArray: Array<CalendarDate>;
  time = { hour: 13, minute: 30 };

  theDate: Date = new Date();
  theHour: number = 13;
  theMinutes: number = 30;

  eventDate: any;
  eventTime: any;
  testDate: any;
  selectedDate: Date;
  dateToSend: CalendarDate;
  editCalendar: boolean;
  calendarEditData: CalendarDate;

  datesToHighlight: Date[] = [];


  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<KalenderPopUpComponent>,
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

  }


  close() {
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


  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight
        .map(strDate => new Date(strDate))
        .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());

      return highlightDate ? 'special-date' : '';
    };
  }

  getSelectedDate(event) {
    this.theDate = event;
  }
  logTime(event) {

    this.theHour = event.hour;
    this.theMinutes = event.minute;

  }

}

