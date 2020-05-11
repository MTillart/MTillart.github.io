export class TimerTask{
    timedTask: string;
    clientName: string;
    time: string;
    constructor(task:string, client:string, time: string){
        this.timedTask = task;
        this.clientName = client;
        this.time = time;
    }
}