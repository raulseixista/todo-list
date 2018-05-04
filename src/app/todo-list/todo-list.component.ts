
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
  listaItems;
  descricao;
  
  constructor(private todolistService : TodoListService) {
    this.nomeSite = 'TODO List do Sucesso';
   }

  ngOnInit() {
    this.listaItems=[
      {descricao:'teste inicial'}
    ];

  }

  adicionar(){
    this.listaItems.push(
      {
        descricao: this.descricao     
      }        
    )  
  }

  remover(descricao){
    for (let index = 0; index < this.listaItems.length; index++) {
      if (this.listaItems[index]["descricao"]==descricao) {
        this.listaItems.splice(index,1);
      }      
    }
  }
}
