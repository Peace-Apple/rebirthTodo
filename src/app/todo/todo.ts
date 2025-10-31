import { Component } from '@angular/core';
import { TodoItem } from '../todo-item';
import { v4 as uuidv4 } from 'uuid';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-todo',
  imports: [
    FormsModule
  ],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  newTask: string ='';
  todoItems: TodoItem[] = []
  
  addTodoItem() {
    const newTodoItem =  {
      id: uuidv4(),
      task: this.newTask,
      completed: false
    }
    if (this.newTask.trim()) {
      this.todoItems.push(newTodoItem);
    }
  }

  deleteTodoItem(itemId: string) {
    this.todoItems = this.todoItems.filter(item => item.id != itemId)
  }

  completeTodo(itemId: string) {
    const item = this.todoItems.find(item => item.id === itemId);
    if (item) {
      item.completed = !item.completed;
    }
  }
}
