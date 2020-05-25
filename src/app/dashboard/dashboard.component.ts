import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { KalenderPopUpComponent } from '../kalender-pop-up/kalender-pop-up.component';
import { To_Do } from '../_models/to_do'
import { isNgTemplate, ThrowStmt } from '@angular/compiler';
import { CalendarDate } from '../_models/calendarDate';
import { element } from 'protractor';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CalendarService } from '../_services/calendar.service';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {

  isAddToDo: boolean;
  isEditToDo: boolean;
  form: FormGroup;
  newTask: To_Do;
  toDoData: To_Do[];
  calendarData: CalendarDate[] = [];
  editData: boolean;
 
  newCalendarDates: [] = [];

  columnsToDisplay = ['Task'];

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private calendarService: CalendarService,
    private toDoService: TodoService
  ) {
  }

  ngOnInit() {
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

  }

}

