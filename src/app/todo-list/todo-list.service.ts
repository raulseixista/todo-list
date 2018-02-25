import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {

  constructor() { }

  getItems(){
    return  ['ex1', 'ex2'];
  }

}
