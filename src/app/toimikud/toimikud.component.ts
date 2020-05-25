import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ClientsService } from '../_services/clients.service';
import { Client } from '../_models/client';
//import {TreeScript} from "./tree.js"
=======
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194

@Component({
  selector: 'app-toimikud',
  templateUrl: './toimikud.component.html',
  styleUrls: ['./toimikud.component.scss']
})
export class ToimikudComponent implements OnInit {

<<<<<<< HEAD
  clientsData: Client[];


  constructor(private clientService: ClientsService) { }


  ngOnInit() {
    this.getClients();


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
  }



}
enum Tree {
  FOLDER,
  FILE
}
export interface File {
  name: string,
  type?: Tree
}
export interface TreeBranch {
  name: string;
  open?: boolean;
  type?: Tree;
  selected?: boolean,
  children?: Array<File>,
  async?: boolean;

}


const tree: TreeBranch[] = [
  {
    name: "file 1",
  },
  {
    name: "file 2",
  },
  {
    name: "FOLDER 1",
    open: true,
    type: Tree.FOLDER,
    selected: true,
    children: [
      {
        name: "file 1.1"
      },
      {
        name: "file 1.2"
      },
      {
        name: "File 1.3"
      }
    ]
  },
  {
    name: "FOLDER 2",
    open: false,
    type: Tree.FOLDER,
    selected: true,
    children: [
      {
        name: "file 2.1"
      },
      {
        name: "file 2.2"
      },
      {
        name: "File 2.3"
      }
    ]
  },
  {
    name: "FOLDER 3(ASYNCed)",
    open: false,
    type: Tree.FOLDER,
    async: true,
    children: [
      {
        name: "file 3.1"
      },
    ]
  },
]
=======

 

  constructor() { }

  dateObj:number = Date.now();

  date: Date = new Date(2018, 0O5, 0O5, 17, 23, 42, 11);  
  date1: Date = new Date(0, 0, 0, 0, 0, 10, 0);  

  date2: Date;

  ngOnInit() {

    this.date.setHours(5)
  }

}
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
