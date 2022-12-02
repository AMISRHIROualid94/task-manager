import { Injectable } from '@angular/core';
import {TasksGroup} from "../models/tasks-group";
import {Task} from "../models/Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

   groupIndex = 0
  deletedTaskGroup:any;
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


  constructor() { }


  getTasksGroups(){
    return this.taskGroups;
  }
  getTasksGroupsByIndex(groupIndex:number){
    return this.taskGroups[groupIndex];
  }
  getGroupTasks(index:number){
    return this.taskGroups[index];
  }
  addNewTasksGroup(description: string){
    let newTaskgroup : TasksGroup = new TasksGroup("0","description",[])
    if(this.getTasksGroups().length==0){
        newTaskgroup.id = "0"
    }else {
      newTaskgroup.id = (+this.taskGroups[this.taskGroups.lastIndexOf(this.taskGroups[this.taskGroups.length - 1])].id + 1).toString()
    }

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
deleteAllTasksGroups() {
  this.taskGroups = []
}

}
