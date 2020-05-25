<<<<<<< HEAD
export class To_Do {
    task: string;
    isDone: boolean;
    constructor(
      task: string,
      isDone?: boolean
    ){
      this.task=task;
      this.isDone = isDone;

    }
=======
export interface To_Do {
    Task: string;
    isDone: boolean;
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194
  }