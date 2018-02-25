
import { Component, OnInit } from '@angular/core';


import { TodoListService } from './todo-list.service';
import { Item } from './item';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  nomeSite: String;
  nome: String = 'abv';
  items: Item[];
  
  constructor(private todolistService : TodoListService) {
    this.nomeSite = 'TODO List do Sucesso';
   
    //this.items = this.todolistService.getItems();
   }
adicionar(){
  alert('Adicionou item');
}
  ngOnInit() {
  }

}
