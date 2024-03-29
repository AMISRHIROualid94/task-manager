import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { TaskGroupListComponent } from './view/task-groups-list/task-group-list.component';
import { TasksListComponent } from './view/tasks-list/tasks-list.component';
import { AddTasksGroupComponent } from './view/task-groups-list/add-tasks-group/add-tasks-group.component';
import {AddTaskComponent} from "./view/tasks-list/add-task/add-task.component";
import {FormsModule} from "@angular/forms";
import { StyleConfigComponent } from './view/style-config/style-config.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    TaskGroupListComponent,
    TasksListComponent,
    AddTasksGroupComponent,
    AddTaskComponent,
    StyleConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
