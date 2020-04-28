import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatCalendarCellCssClasses} from "@angular/material";
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { To_Do } from '../_models/to_do';
import { Time } from '../_models/time';

@Component({
  selector: 'app-kalender-pop-up',
  templateUrl: './kalender-pop-up.component.html',
  styleUrls: ['./kalender-pop-up.component.scss']
})
export class KalenderPopUpComponent implements OnInit {

  form: FormGroup;
  task: string;
  dataArray: Array<To_Do>;
  time = {hour: 13, minute: 30};

  eventDate: any;
  eventTime: any;
  testDate: any;

  datesToHighlight = ["2020-03-22T18:30:00.000Z", "2020-03-10T18:30:00.000Z", "2020-03-05T18:30:00.000Z", "2020-03-28T18:30:00.000Z", "2020-03-14T18:30:00.000Z", "2020-03-31T18:30:00.000Z", "2020-03-08T18:30:00.000Z", "2020-03-15T18:30:00.000Z"];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<KalenderPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.form = new FormGroup({
      task: new FormControl(),
      eventDate: new FormControl(new  Date()),
      eventTime: new FormControl(),
    })

      this.dataArray = data;
      //console.log(this.dataArray);
    
}
  ngOnInit() {


    
  }

  save() {
    console.log("saving");

    console.log(this.form.value);
    this.dialogRef.close(this.form.value);
   
  }


  close() {
      this.dialogRef.close();
  }

  onSelect(event){
    console.log(event);
  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight
        .map(strDate => new Date(strDate))
        .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
      
      return highlightDate ? 'special-date' : '';
    };
  }

  getSelectedDate(event){
    console.log(event);
    this.form.get('eventDate').setValue(event);
  }
  logTime(event){
    this.form.get('eventTime').setValue(event);
    console.log(event);
    
  }

}
