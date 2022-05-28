import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponenets/todos/todos.component';
import { TodoItemComponent } from './Mycomponenets/todo-item/todo-item.component';
import { AddTodosItemComponent } from './Mycomponenets/add-todos-item/add-todos-item.component';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { WebcamComponent } from './webcam/webcam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaceRecogComponent } from './face-recog/face-recog.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodosItemComponent,
    WebcamComponent,
    FaceRecogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    //MatSidenavModule
    //HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
