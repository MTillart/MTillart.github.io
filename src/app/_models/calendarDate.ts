// export class CalendarDate {
//   eventDate: Date;
//   time: String;
//   task: String;
//   desc?: [{
//     time: String,
//     task: String
//   }
//   ]


//   constructor(
//     newDate: Date,
//     newTask: String,
//     newTime: String,
//     ) {
//     this.eventDate = newDate;
//     this.desc= [{
//       time: newTime,
//       task: newTask
//     }]

//   }
//   public addDesc(desc){
//     this.desc.push(desc)
//     console.log("HEi");

//   }
// }
export class CalendarDate {
  eventDate: Date;
  time: String;
  task: String;
  [key: string]: any

  desc?: [{
    time: String,
    task: String
  }
  ]


  constructor(
    newDate: Date,
    newTask: String,
    newTime: String,
  ) {
    this.eventDate = newDate;
    this.time = newTime;
    this.task = newTask;
  }

  public addDesc(desc) {
    this.desc.push(desc)
    console.log("HEi");

  }
}