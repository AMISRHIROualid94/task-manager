import { Injectable } from '@angular/core';
import {TasksGroup} from "../models/tasks-group";
import {Task} from "../models/Task";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskGroupService {

  constructor(private http : HttpClient) { }
  url = "http://localhost:8080/taskGroups";

  isActive = false;
  editIsActive = false;
   groupIndex = 0
  deletedTaskGroup:any;
  currentTask:Task



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
    return this.http.delete(this.url+"/deleteall");
  }









}
