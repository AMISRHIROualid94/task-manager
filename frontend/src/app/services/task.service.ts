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



  getTasksGroupsApi():Observable<any>{
    return this.http.get(this.url);
  }


  addNewTasksGroupApi(newTaskGroup:TasksGroup):Observable<any>{
    return this.http.post(this.url,newTaskGroup)
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.url);
  }

  deleteTaskGroupById(id:number):Observable<any>{
    return this.http.delete(this.url + "/" +id);
  }
  /* Handle Tasks for TaskGroup*/
  getGroupTasks(id:number):Observable<any>{
    return this.http.get(this.url+"/"+id);
  }

  getTaskById(id:number):Observable<Task>{
    return this.http.get<Task>(this.url2 + "/" + id);
  }

  addNewTask(newTask:Task,tgId:number):Observable<Task>{
    return this.http.post<Task>(this.url+"/"+tgId+"/tasks",newTask)
  }

  deleteTaskById(id:number):Observable<any>{
    return this.http.delete(this.url2 +"/"+id);
  }

  editTaskbyId(id:number,task:Task):Observable<Task>{
    return this.http.patch<Task>(this.url2 + "/" + id,task)
  }





}
