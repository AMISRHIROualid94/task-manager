import { Injectable } from '@angular/core';
import {TasksGroup} from "../models/tasks-group";
import {Task} from "../models/Task";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }
  url = "http://localhost:8080/taskGroups";
  url2 = "http://localhost:8080/tasks";

  isActive = false;
  editIsActive = false;

  tasks1 : Task[]=[
    new Task(1,"task1"),
    new Task(2,"task2"),
    new Task(3,"task3"),
    new Task(4,"task4")
  ];
  tasks2 : Task[]=[
    new Task(1,"task1"),
    new Task(2,"task2"),
    new Task(3,"task3"),
    new Task(4,"task4")
  ];
  tasks3 : Task[]=[
    new Task(1,"taskI"),
    new Task(2,"taskII"),
    new Task(3,"taskIII"),
    new Task(4,"taskIV")
  ];
  tasks4 : Task[]=[
    new Task(1,"task-a"),
    new Task(2,"task-b"),
    new Task(3,"task-c"),
    new Task(4,"task-d")
  ];
  taskGroups: TasksGroup[] = [
    new TasksGroup(1,"groupe1",this.tasks1),
    new TasksGroup(2,"groupe2",this.tasks2),
    new TasksGroup(3,"groupe3",this.tasks3),
    new TasksGroup(4,"groupe4",this.tasks4)
  ];
  getTasksGroupsApi():Observable<any>{
    return this.http.get(this.url);
  }

  getGroupTasks(id:number):Observable<any>{
    return this.http.get(this.url+"/"+id);
  }

  addNewTasksGroupApi(newTaskGroup:TasksGroup):Observable<any>{
    return this.http.post(this.url,newTaskGroup)
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.url);
  }

  /* Handle Tasks for TaskGroup*/
  addNewTask(newTask:Task,tgId:number):Observable<Task>{
    return this.http.post<Task>(this.url+"/"+tgId+"/tasks",newTask)
  }

  deleteTaskById(id:number):Observable<any>{
    return this.http.delete(this.url2 +"/"+id);
  }






}
