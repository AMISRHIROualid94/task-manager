import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import {AddTasksGroupComponent} from "./view/task-groups-list/add-tasks-group/add-tasks-group.component";
import {AddTaskComponent} from "./view/tasks-list/add-task/add-task.component";

const routes: Routes = [
  {path: 'task-view', component:ViewComponent},
  {path: 'add-tasks-group', component:AddTasksGroupComponent},
  {path: 'add-task', component:AddTaskComponent},
  {path:'', redirectTo:'/task-view',pathMatch:'full'},
  {path:'**',redirectTo:'/task-view',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
