import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, pipe, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ClientsService } from '../_services/clients.service';
import { Client } from '../_models/client';
import { timer } from 'rxjs';
import { TimerTask } from '../_models/timerTask';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  form: FormGroup;

  extendView: boolean;
  clientsData: Client[];
  play: boolean;
  ticking = timer(0, 1000);
  timeRunning: boolean;
  subscription: Subscription;

  time: number;
  pausedTime: number;
  interval;

  taskToSend: TimerTask;

  clientName = new FormControl();
  timedTask = new FormControl();

  filteredOptions: Observable<Client[]>;

  constructor(
    private clientService: ClientsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getClients();
    this.timeRunning = false;
    this.extendView = false;
    this.time = 0;

    this.filteredOptions = this.clientName.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.clientsData.slice())
      );
    this.form = this.fb.group({
      timedTask: ['', Validators.required],
      clientName: ['', Validators.required],
    })

  }

  getClients() {
    console.log("Init for the clients");
    this.clientService.getAllClients()
      .subscribe(data => {
        this.clientsData = data
      },
        error => {
          console.log(error);

        }
      );

    console.log(this.clientsData);

  }

  toggleExtendedView() {

    this.extendView = !this.extendView;
  }

  displayFn(client: Client): string {
    return client && client.name ? client.name : '';
  }

  private _filter(name: string): Client[] {
    const filterValue = name.toLowerCase();

    return this.clientsData.filter(item => item.name.toLowerCase().includes(filterValue));
  }

  startTimer() {
    if (!this.timeRunning && this.time == 0) {
      console.log("time Start");

      this.subscription = this.ticking.subscribe(val => this.time = val);
      this.timeRunning = true;
    } else if (!this.timeRunning && this.time > 0) {
      console.log("time continue");
      console.log(this.time);
      this.pausedTime = this.time;

      this.subscription = this.ticking.subscribe(val => this.time = this.pausedTime + val);

      this.timeRunning = true;

    } else {
      console.log("Somethin ELSE");

    }
  }

  pauseTimer() {
    this.subscription.unsubscribe();
    this.timeRunning = false;
    console.log(this.time);

  }
  stopTimer() {
    if (this.time > 0) {
      this.subscription.unsubscribe();

      // turn seconds into time string
      const timeForDb = this.secondToTime(this.time);

      // save form to object
      this.taskToSend = new TimerTask(
        this.timedTask.value,
        this.clientName.value.name,
        timeForDb
      );
      console.log(this.taskToSend);
      //reset the timer and form
      this.timeRunning = false;
      this.timedTask.setValue("")
      this.clientName.setValue("")
      this.time = 0;
    }

  }
  secondToTime(seconds: number) {
    var date = new Date(0);
    date.setSeconds(seconds); // specify value for SECONDS here
    var timeString = date.toISOString().substr(11, 8);
    return timeString;
  }

}
