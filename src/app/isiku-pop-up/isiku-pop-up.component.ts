import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Client } from '../_models/client';

@Component({
  selector: 'app-isiku-pop-up',
  templateUrl: './isiku-pop-up.component.html',
  styleUrls: ['./isiku-pop-up.component.scss']
})
export class IsikuPopUpComponent implements OnInit {
  dataPerson: Client;


  constructor(
    private dialogRef: MatDialogRef<IsikuPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) data,
  ) {
    this.dataPerson = data;
   }

  ngOnInit() {
   

  }

  close() {
    this.dialogRef.close();
}

}
