
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

  //items : Item[];
  contactlist;
  txtName;
  
  constructor(private todolistService : TodoListService) {
    this.nomeSite = 'TODO List do Sucesso';
   }

  ngOnInit() {
    this.contactlist=[
      {name:'teste inicial'}
    ];

  }

  adicionar(){
    this.contactlist.push(
      {
        name: this.txtName     
      }        
    )  
  }

  remover(name){
    for (let index = 0; index < this.contactlist.length; index++) {
      if (this.contactlist[index]["name"]==name) {
        this.contactlist.splice(index,1);
      }      
    }
  }
}
