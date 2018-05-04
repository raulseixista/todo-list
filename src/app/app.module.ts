import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ProjetosModule } from './projetos/projetos.module';
import { TodoListService } from './todo-list/todo-list.service';
import { TodoListModule } from './todo-list/todo-list.module';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { DataBidingComponent } from './data-biding/data-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    DataBidingComponent
  ],
  imports: [
    BrowserModule,
    ProjetosModule,
    TodoListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
