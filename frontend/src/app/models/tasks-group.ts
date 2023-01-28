import {Task} from "./Task";

export class TasksGroup {
  public id: string;
  public title: string;
  public tasks? : Task[];

  constructor(id: string, title: string, tasks?: Task[]) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
  }
}
