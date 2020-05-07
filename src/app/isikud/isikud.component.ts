import { Component, OnInit } from '@angular/core';
import { Client } from '../_models/client';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { IsikuPopUpComponent } from '../isiku-pop-up/isiku-pop-up.component';
import { LisaIsikPopUpComponent } from '../lisa-isik-pop-up/lisa-isik-pop-up.component';
import { ClientsService } from '../_services/clients.service';

@Component({
  selector: 'app-isikud',
  templateUrl: './isikud.component.html',
  styleUrls: ['./isikud.component.scss']
})
export class IsikudComponent implements OnInit {

  clientsData: Client[];

  constructor(
    public dialog: MatDialog,
    private clientService: ClientsService
  ) { }

  ngOnInit() {
     this.getClients();

  }
  getClients() {
    console.log("Init for the clients");
    this.clientService.getAllClients()
    .subscribe( data => {
      this.clientsData = data},
      error => {
        console.log(error);
        
      }
      );
    
    console.log(this.clientsData);
    
  }

  openAddClient() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.height = "600px";
    dialogConfig.width = "350px";
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'dialogBox';

    this.dialog.open(LisaIsikPopUpComponent, dialogConfig).afterClosed().subscribe(result => {
      console.log("Dialog closed");
      
      this.getClients();
    });

  }

  openClienView(clientId) {

    console.log("Message:" + clientId)
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.height = "60%";
    dialogConfig.width = "60%";
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'dialogBox';
    dialogConfig.autoFocus = true;

    //   dialogConfig.data = {
    //     id: 1,
    //     title: 'Kalender'
    // };
    let obj = this.clientsData.find(obj => obj._id == clientId);
    dialogConfig.data = obj;

    this.dialog.open(IsikuPopUpComponent, dialogConfig).afterClosed().subscribe(result => {
      console.log("Dialog closed");
      
      this.getClients();
    });
  

  }

  


}