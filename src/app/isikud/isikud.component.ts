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
    // GET Clients Data from API
    console.log("Init for the clients");
    this.clientService.getAllClients()
    .subscribe( data => this.clientsData = data);
    this.getClients();

  }
  getClients() {
    
    console.log(this.clientsData);
    
  }

  openAddClient() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.height = "600px";
    dialogConfig.width = "350px";
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'dialogBox';

    this.dialog.open(LisaIsikPopUpComponent, dialogConfig);

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

    this.dialog.open(IsikuPopUpComponent, dialogConfig);
  }



}

// const PersonData: Client[] = [
//   {
//     _Id: "1",
//     _Firstname: "Mari",
//     _Lastname: "Kadakas",
//     _IdCode: 49110021218,
//     _Phone: 5685265,
//     _Email: "kadakamari@gmail.com"
//   },
//   {
//     _Id: "40",
//     _Firstname: "Konrad",
//     _Lastname: "Sadam",
//     _IdCode: 38502141524,
//     _Phone: 5445668,
//     _Email: "konradsadam@gmail.com"
//   },
//   {
//     _Id: "77",
//     _Firstname: "Polly",
//     _Lastname: "Zudra",
//     _IdCode: 48304241714,
//     _Phone: 445445668,
//     _Email: "zudra.polly@hotmail.com"

//   },
//   {
//     _Id: "154",
//     _Firstname: "OÜ Päevakaja",
//     _IdCode: +35114451555,
//     _Phone: 51459527,
//     _Email: "paevakaja@hotmail.com"

//   }
// ]