import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { KalenderPopUpComponent } from '../kalender-pop-up/kalender-pop-up.component';
import { To_Do } from '../_models/to_do'
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {



  dataSource1 = DASH_DATA1;
  calendarData: calDate[];

  newCalendarData: calDate[];

  columnsToDisplay = ['Task'];

  constructor(
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {


    this.sortedArray()
    console.log("The sorted dates are: ");

    this.calendarData = calenderDates;

    this.sortObjects(this.calendarData);


    console.log(calenderDates);


  }

  public sortedArray(): calDate[] {

    // Sort the array by date acending (jan->dec)
    console.log("Sorting array");

    return calenderDates.sort((a, b) => {
      return <any>new Date(a.eventDate) - <any>new Date(b.eventDate);
    });
  }
  sortObjects(array) {
    array.forEach((element, index) => {
     console.log(element.eventDate.getFullYear());
     console.log(element.eventDate.getMonth());
     console.log(element.eventDate.getDate());

      if(array.findIndex(i => i.eventDate.getFullYear() == element.eventDate.getFullYear())=== 0 &&
      array.findIndex(i => i.eventDate.getMonth() == element.eventDate.getMonth())=== 0 &&
      array.findIndex(i => i.eventDate.getDate() == element.eventDate.getDate())=== 0

      )
      {
        console.log("Ther was a similar object" + element.eventDate);
        
        
        this.newCalendarData
      }else {
        console.log("no similar objects");
        
      }

    
      
      
      
    });




  }



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
export interface calDate {
  eventDate: Date;
  task: string;
}
const calenderDates: calDate[] = [
  {
    eventDate: new Date,
    task: "Comand the Normandy"
  },
  {
    eventDate: new Date(2020, 0o0, 13, 13, 0o0),
    task: "Shoot disks with Vak"
  },
  {
    eventDate: new Date(2020, 0o5, 10, 15, 0o0),
    task: "Protheans art"
  },
  {
    eventDate: new Date(2020, 0o5, 10, 14, 21),
    task: "Poems with Wrex"
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