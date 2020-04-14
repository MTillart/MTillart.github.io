import { Component, OnInit } from '@angular/core';
import { Person } from '../_models/person';

@Component({
  selector: 'app-isikud',
  templateUrl: './isikud.component.html',
  styleUrls: ['./isikud.component.scss']
})
export class IsikudComponent implements OnInit {

  dataSource = PersonData;

  constructor() { }

  ngOnInit() {
  }

  showText(text){
    console.log("Message:"+ text)
  }

  
}

const PersonData: Person[] = [
  {
    Id: 1,
    Name: "Mari",
    Lastname: "Kadakas",
    Phone: 5685265,
    Email: "kadakamari@gmail.com"
  },
  {
    Id: 40,
    Name: "Konrad",
    Lastname: "Sadam",
    Phone: 5445668,
    Email: "konradsadam@gmail.com"

  },
  {
    Id: 77,
    Name: "Polly",
    Lastname: "Zudra",
    Phone: 445445668,
    Email: "zudra.polly@hotmail.com"

  },
  {
    Id: 154,
    Name: "OÜ Päevakaja",
    Phone: 51459527,
    Email: "paevakaja@hotmail.com"

  }
]