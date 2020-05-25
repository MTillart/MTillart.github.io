import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { KalenderPopUpComponent } from '../kalender-pop-up/kalender-pop-up.component';
import { To_Do } from '../_models/to_do'
import { isNgTemplate, ThrowStmt } from '@angular/compiler';
import { CalendarDate } from '../_models/calendarDate';
import { element } from 'protractor';
<<<<<<< HEAD
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CalendarService } from '../_services/calendar.service';
import { TodoService } from '../_services/todo.service';
=======
import { FormBuilder, FormGroup } from '@angular/forms';
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {

<<<<<<< HEAD
  isAddToDo: boolean;
  isEditToDo: boolean;
  form: FormGroup;
  newTask: To_Do;
  toDoData: To_Do[];
  calendarData: CalendarDate[] = [];
  editData: boolean;
 
  newCalendarDates: [] = [];
=======
  isAddTask: boolean;
  form: FormGroup;



  dataSource1 = DASH_DATA1;
  calendarData: CalendarDate[];

  newCalendarDates;
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194

  columnsToDisplay = ['Task'];

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
<<<<<<< HEAD
    private calendarService: CalendarService,
    private toDoService: TodoService
=======
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
  ) {
  }

  ngOnInit() {
<<<<<<< HEAD
    this.getToDos();

    this.getCalendarDates();
    console.log(this.calendarData);
    this.isAddToDo = false;
    this.form = this.fb.group({
      toDoTask: ['', Validators.required],
      isDone: ['']
    });


  }
  get toDoTask() { return this.form.get('toDoTask'); }

  openAddToDo() {
    this.isAddToDo = !this.isAddToDo;
  }

  checkedBox(task: string, isDone: boolean, taskId: string) {
    console.log("checkedbox: " + isDone);
    isDone = !isDone
    const toDo = new To_Do(
      task,
      isDone,
    );

    this.toDoService.changeToDo( taskId, toDo)
    .subscribe(
      date => console.log(date),
      (err) => console.log(err),
      () => this.getToDos()

    );
  }

  saveAddToDo() {
    console.log(this.form.get("toDoTask").value);
    this.newTask = {
      task: this.form.get("toDoTask").value,
      isDone: false
    }
    this.isAddToDo = !this.isAddToDo;
    console.log(this.newTask);

    this.toDoService.addToDo(this.newTask)
    .subscribe(
      date => console.log(date),
      (err) => console.log(err),
      () => this.getToDos()

    );
    this.form.reset();
  }
  closeAddToDo() {
    this.isAddToDo = !this.isAddToDo;
    this.form.reset();
  }
  getCalendarDates() {
    console.log("Init for the DATES");
    this.calendarService.getAllCalendarDates()
      .subscribe(data => {
        this.calendarData = data
      },
        error => {
          console.log(error);
        }
      );
  }

  public get sortedArray(): CalendarDate[] {
    return this.calendarData.sort((a, b) => {
      return a.eventDate > b.eventDate ? 1 : -1;
    });
  }
  deleteEvent(calenderId) {
    if (confirm("Kas soovid kalendri sündmuse kustutada?")) {
      console.log("kustutan kuupäeva");
      this.calendarService.deleteCalendarDate(calenderId)
        .subscribe(
          date => console.log(date),
          (err) => console.log(err),
          () => this.getCalendarDates()

        );


    } else {
      console.log("sündmust ei kustutud");
    }

  }
=======


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

>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194


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
<<<<<<< HEAD
    dialogConfig.data = this.calendarData;

    //this.dialog.open(KalenderPopUpComponent, dialogConfig);
    this.dialog.open(KalenderPopUpComponent, dialogConfig).afterClosed().subscribe(result => {
      console.log("Dialog closed");

      this.getCalendarDates();
    });
  }
  changeCalenderEventDialog(calenderId) {
    this.editData = true

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
    let obj = this.calendarData.find(obj => obj._id == calenderId);
    dialogConfig.data = {
      obj,
      editing: this.editData
    }

    //this.dialog.open(KalenderPopUpComponent, dialogConfig);
    this.dialog.open(KalenderPopUpComponent, dialogConfig).afterClosed().subscribe(result => {
      console.log("Dialog closed");
      this.getCalendarDates();
    });
  }
  getToDos() {
    console.log("GETTING DO TOS");
    
    this.toDoService.getAllToDos()
      .subscribe(data => {
        this.toDoData = data
      },
        error => {
          console.log(error);
        }
      );
  }
  
  deleteToDo(toDoId) {
    if (confirm("Kas soovid tegevuse kustutada?")) {
      console.log("kustutan tegevuse");
      this.toDoService.deleteTo_Do(toDoId)
        .subscribe(
          date => console.log(date),
          (err) => console.log(err),
          () => this.getToDos()

        );


    } else {
      console.log("sündmust ei kustutud");
    }
=======
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

>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194

  }

}
<<<<<<< HEAD

=======
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
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
