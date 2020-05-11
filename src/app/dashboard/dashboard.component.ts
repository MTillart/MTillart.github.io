import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { KalenderPopUpComponent } from '../kalender-pop-up/kalender-pop-up.component';
import { To_Do } from '../_models/to_do'
import { isNgTemplate, ThrowStmt } from '@angular/compiler';
import { CalendarDate } from '../_models/calendarDate';
import { element } from 'protractor';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {

  isAddTask: boolean;
  form: FormGroup;



  dataSource1 = DASH_DATA1;
  calendarData: CalendarDate[];

  newCalendarDates;

  columnsToDisplay = ['Task'];

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {


    //this.sortArray()
    console.log("The sorted dates are: ");

    this.calendarData = calenderDates;
    console.log(calenderDates);
    //this.sortObjects(this.calendarData);

    this.isAddTask= false;





  }

  openAddTask(){
    this.isAddTask=!this.isAddTask;

    this.form = this.fb.group({
      toDoTask: "",})

  }
  saveAddTask(){
    this.form; 
    // send API CALL

  }
  closeAddTask(){
    this.isAddTask=!this.isAddTask;
  }

  // public sortArray(): CalendarDate[] {

  //   // Sort the array by date acending (jan->dec)
  //   console.log("Sorting array");

  //   return calenderDates.sort((a, b) => {
  //     return <any>new Date(a.calDate) - <any>new Date(b.calDate);
  //   });
  // }

  // sortObjects(array) {
  //   this.newCalendarDates = [];
  //   console.log(this.newCalendarDates[0]);



  //   array.forEach((element, i = 0) => {


  //     // console.log(i);
  //     // console.log(element.Task);

  //     // if (this.newCalendarDates[0] == undefined) {
  //     //   console.log("UNDEFINED");
  //     //   const obj = new newCalDate(
  //     //     element.calDate,
  //     //     element.Task,
  //     //     element.Time
  //     //   );
  //     //   console.log("OBJECT " + obj.eventDate);
  //     //   console.log("OBJECT " + obj.desc[i].task);

  //     //   this.newCalendarDates.push(obj);

  //     // } else if (this.newCalendarDates.filter(o => o.eventDate === "element.calDate")) {
  //     //   //console.log("NCD date: " + this.newCalendarDates[0].calDate);


  //     //   console.log("Ther was a similar object" + element.calDate);
  //     //   var show = this.newCalendarDates.filter(o => o.eventDate == element.calDate);

  //     //   console.log("SHOW: " + show);

  //     // } else {




  //     //   // console.log("NCD date: " + this.newCalendarDates[i].eventDate);
  //     //   const obj = new newCalDate(
  //     //     element.calDate,
  //     //     element.Task,
  //     //     element.Time
  //     //   );
  //     //   console.log("OBJECT " + obj.desc[0].task);


  //     //   this.newCalendarDates.push(obj);

  //     // }
  //     // i++;


  //   });
  //   console.log(this.newCalendarDates);





  // }



  // Open pop-up and configur it. Send data
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.height = "600px";
    dialogConfig.width = "600px";
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'calendarBox';
    //dialogConfig.autoFocus = true;

    //   dialogConfig.data = {
    //     id: 1,
    //     title: 'Kalender'
    // };
    //dialogConfig.data = DASH_DATA;

    this.dialog.open(KalenderPopUpComponent, dialogConfig);
  }

}
export class newCalDate {

  user: {
    name: string,
    email: string,
    password: string,
    clients: [
      {
        name: string,
        email: string,
        etc: string
      }
    ],
    calender: [
      {
        eventDate: Date;
        desc: [
          {
            task: string,
            time: string
          }
        ]
      },{
        eventDate: Date;
        desc: [
          {
            task: string,
            time: string
          }
        ]
      }
    ]
  }




  eventDate: Date;
  desc: [
    {
      task: string,
      time: string
    }
  ]

  // constructor(
  //   newDate: Date,
  //   newTask: string,
  //   newTime: string) {
  //   this.eventDate = newDate;
  //   this.desc = [
  //     {
  //       task: newTask,
  //       time: newTime
  //     }
  //   ]

  // }

  addDesc(desc) {
    this.desc.push(desc);
    console.log("ADDDESCK func: added a task");


  }

}
const calenderDates: CalendarDate[] = [
  {
    calDate: new Date,
    Task: "Comand the Normandy",
    Time: "08:00"
  },
  {
    calDate: new Date(2020, 0o0, 13),
    Task: "Shoot disks with Vak",
    Time: "11:50"
  },
  {
    calDate: new Date(2020, 0o5, 10),
    Task: "Protheans art",
    Time: "15:15"
  },
  {
    calDate: new Date(2020, 0o5, 10),
    Task: "Poems with Wrex",
    Time: "8.30"
  },
]


export interface To_Do1 {
  Task: string;
  isDone: boolean;
}

const DASH_DATA1: To_Do1[] = [
  {
    Task: "Esita dokument A",
    isDone: false
  }, {
    Task: "Esita dokument B",
    isDone: false
  },
  {
    Task: "Saada email",
    isDone: true
  },
  {
    Task: "Korrasta sahtleid",
    isDone: false
  },
  {
    Task: "Toimik 59 ülevaadata",
    isDone: true
  },
  {
    Task: "Tõnu Tõru?",
    isDone: false
  },
  {
    Task: "Tõnu Tõru?",
    isDone: false
  },
  {
    Task: "Tõnu Tõru?",
    isDone: false
  },
  {
    Task: "Tõnu Tõru?",
    isDone: false
  },

];