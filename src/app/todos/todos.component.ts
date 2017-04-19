import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'; 


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos;
  text;
  oldText;
  appState = 'default';
  

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }
  
  addTodo(){
    var newTodo = {
      text: this.text
    }
    this.todos.push( newTodo );
    
    this._todoService.addTodo( newTodo );
    this.text = ""; 
  }
  
  deleteTodo(i){
      this.todos.splice(i, 1);
      
      this._todoService.deleteTodo(i);
  }  

}
