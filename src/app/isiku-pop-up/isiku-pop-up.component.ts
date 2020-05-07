import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material';
import { Client } from '../_models/client';
import { ClientsService } from '../_services/clients.service';
import { LisaIsikPopUpComponent } from '../lisa-isik-pop-up/lisa-isik-pop-up.component';

@Component({
  selector: 'app-isiku-pop-up',
  templateUrl: './isiku-pop-up.component.html',
  styleUrls: ['./isiku-pop-up.component.scss']
})
export class IsikuPopUpComponent implements OnInit {
  dataPerson: Client;
  clientsData: Client[];


  constructor(
    private dialogRef: MatDialogRef<IsikuPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    public dialog: MatDialog,
    private clientService: ClientsService,
    private isikuPopup: MatDialogRef<LisaIsikPopUpComponent>,
    
  ) {
    this.dataPerson = data;
  }

  ngOnInit() {


  }
  getClient(clientId){
    this.clientService.getClient(clientId)
      .subscribe(
        (data)=> {
          this.dataPerson = data;
          console.log("Data updated!");
          
        },
        (err) => console.log(err)   
                
      );
  }
  deleteClient(clientId) {

    console.log("ID: "+clientId);
    
    this.clientService.deleteClient(clientId)
      .subscribe(
        ()=> console.log(`Client with id = ${clientId} deleted`),
        (err) => console.log(err)   
                
      );
    this.dialogRef.close();
  }
  changeClient(clientId){
    
      const dialogConfig = new MatDialogConfig();
  
      dialogConfig.disableClose = false;
      dialogConfig.height = "600px";
      dialogConfig.width = "350px";
      dialogConfig.hasBackdrop = true;
      dialogConfig.panelClass = 'dialogBox';

      
    dialogConfig.data = this.dataPerson;
  
      this.dialog.open(LisaIsikPopUpComponent, dialogConfig).afterClosed().subscribe(result => {
        console.log("Dialog closed");
        this.getClient(clientId);       
        
      });
      

  }

  close() {
    this.dialogRef.close();
  }

}
