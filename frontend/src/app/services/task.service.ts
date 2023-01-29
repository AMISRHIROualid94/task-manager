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

  isActive = false;
  editIsActive = false;
   groupIndex = 0
  deletedTaskGroup:any;
  currentTask:Task
  tasks1 : Task[]=[
    new Task("1","task1"),
    new Task("2","task2"),
    new Task("3","task3"),
    new Task("4","task4")
  ];
  tasks2 : Task[]=[
    new Task("1","task1"),
    new Task("2","task2"),
    new Task("3","task3"),
    new Task("4","task4")
  ];
  tasks3 : Task[]=[
    new Task("1","taskI"),
    new Task("2","taskII"),
    new Task("3","taskIII"),
    new Task("4","taskIV")
  ];
  tasks4 : Task[]=[
    new Task("1","task-a"),
    new Task("2","task-b"),
    new Task("3","task-c"),
    new Task("4","task-d")
  ];
  taskGroups: TasksGroup[] = [
    new TasksGroup("1","groupe1",this.tasks1),
    new TasksGroup("2","groupe2",this.tasks2),
    new TasksGroup("3","groupe3",this.tasks3),
    new TasksGroup("4","groupe4",this.tasks4)
  ];


  getTasksGroupsApi():Observable<any>{
    return this.http.get(this.url);
  }
  getTask(groupIndex: number,taskId: string){
    let tg = this.getTasksGroupsByIndex(groupIndex)
    tg.tasks?.forEach(task => {
      if (task.id === taskId) {
        this.currentTask=task
      }
    })
    return this.currentTask
  }
  getTasksGroupsByIndex(groupIndex:number){
    return this.taskGroups[groupIndex];
  }
  getGroupTasks(index:number):Observable<any>{

    return this.http.get(this.url+"/"+index+1);
  }
  addNewTasksGroup(description: string){
    let newTaskgroup : TasksGroup = new TasksGroup("0","description",[])
    this.getTasksGroupsApi().subscribe(res=>{
      if(res.length==0){
        newTaskgroup.id = "0"
      }else {
        newTaskgroup.id = (+this.taskGroups[this.taskGroups.lastIndexOf(this.taskGroups[this.taskGroups.length - 1])].id + 1).toString()
      }
    })


    newTaskgroup.title = description
    this.taskGroups.push(newTaskgroup)
    this.groupIndex = this.taskGroups.indexOf(newTaskgroup)
  }

  addNewTask(groupIndex:number,description: string){
    let newTask :Task = new Task("0","description")
    let taskGroup : TasksGroup = this.getTasksGroupsByIndex(groupIndex)
    newTask.id = (taskGroup.tasks!.length + 1).toString()
    newTask.description = description
    taskGroup.tasks?.push(newTask)
  }

deleteTask(groupIndex:number,taskId:string){
  let tg = this.getTasksGroupsByIndex(groupIndex)
  tg.tasks?.forEach(task => {
    if(task.id === taskId) {
      tg.tasks!.splice(tg.tasks!.indexOf(task),1)
    }
  })
  if(tg.tasks!.length==0){
    this.deletedTaskGroup = tg
    this.taskGroups.splice(this.taskGroups.indexOf(tg),1)
  }
}
editTask(groupIndex:number,taskId:string,newDescription:string){
  let tg = this.getTasksGroupsByIndex(groupIndex)
  tg.tasks?.forEach(task => {
    if (task.id === taskId) {
     task.description = newDescription;
    }
  })
}
deleteAllTasksGroups() {
  this.taskGroups.splice(0,this.taskGroups.length)
  this.tasks1.splice(0,this.tasks1.length)
  this.tasks2.splice(0,this.tasks2.length)
  this.tasks3.splice(0,this.tasks3.length)
  this.tasks4.splice(0,this.tasks4.length)
}

}
