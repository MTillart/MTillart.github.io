import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { KalenderPopUpComponent } from '../kalender-pop-up/kalender-pop-up.component';
import {To_Do} from '../_interface/to_do'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class DashboardComponent implements OnInit {
  dataSource = DASH_DATA;
  dataSource1 = DASH_DATA1;
  columnsToDisplay = ['Task'];
  expandedElement: To_Do | null;

  constructor(
    public dialog: MatDialog) {

   }
// Open pop-up and configur it. Send data
   openDialog() {

    const dialogConfig = new MatDialogConfig();
    console.log("HEllo ")

    dialogConfig.disableClose = true;
    dialogConfig.height = "650px";
    dialogConfig.width = "600px";
    //dialogConfig.autoFocus = true;

  //   dialogConfig.data = {
  //     id: 1,
  //     title: 'Angular For Beginners'
  // };
  dialogConfig.data = DASH_DATA;

    this.dialog.open(KalenderPopUpComponent, dialogConfig);
}





  ngOnInit() {
  }

}
// export interface To_Do {
//   Task: string;
//   isDone: boolean;
// }

const DASH_DATA: To_Do[] = [
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
  
];

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