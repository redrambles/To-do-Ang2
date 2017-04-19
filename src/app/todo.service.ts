import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable()
export class TodoService extends Init{

  constructor() { 
    super();
    console.log('TodoService Initialized...');
    this.load();
  }

  getTodos() {
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }
  
  addTodo(newTodo){
    var todos = JSON.parse(localStorage.getItem('todos'));
    // Add New TodoService
    todos.push(newTodo);
    // Set New todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  deleteTodo(todoText){
    var todos = JSON.parse(localStorage.getItem('todos'));  
    todos.splice(todoText, 1);
    
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
    updateTodo(oldText, newText){
    var todos = JSON.parse(localStorage.getItem('todos'));  
    
    for( var i=0; i < todos.length; i++ ){
      if( todos[i].text == oldText ){
        todos[i].text = newText;
      }
    }
    
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
}