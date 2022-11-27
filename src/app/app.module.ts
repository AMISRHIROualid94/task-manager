import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { TaskGroupListComponent } from './view/task-groups-list/task-group-list.component';
import { TasksListComponent } from './view/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    TaskGroupListComponent,
    TasksListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
