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
  }