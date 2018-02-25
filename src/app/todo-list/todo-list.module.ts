
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListService } from './todo-list.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [TodoListService],
  declarations: []
})
export class TodoListModule { }
