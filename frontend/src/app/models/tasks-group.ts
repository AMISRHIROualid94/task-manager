import {Task} from "./Task";

export class TasksGroup {
  public id?: number;
  public title: string;
  public createAt?:Date
  public tasks? : Task[];

  constructor(id: number, title: string, createAt:Date,tasks?: Task[]) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
    this.createAt = createAt;
  }
}
