import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../_services/clients.service';
import { Client } from '../_models/client';
//import {TreeScript} from "./tree.js"

@Component({
  selector: 'app-toimikud',
  templateUrl: './toimikud.component.html',
  styleUrls: ['./toimikud.component.scss']
})
export class ToimikudComponent implements OnInit {

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
