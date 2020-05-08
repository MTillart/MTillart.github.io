import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toimikud',
  templateUrl: './toimikud.component.html',
  styleUrls: ['./toimikud.component.scss']
})
export class ToimikudComponent implements OnInit {


 

  constructor() { }

  dateObj:number = Date.now();

  date: Date = new Date(2018, 0O5, 0O5, 17, 23, 42, 11);  
  date1: Date = new Date(0, 0, 0, 0, 0, 10, 0);  

  date2: Date;

  ngOnInit() {

    this.date.setHours(5)
  }

}
