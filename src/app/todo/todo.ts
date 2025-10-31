import { Component } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  todoItems: TodoItem[] = [
    {
      id: 1,
      task: 'Review Angular concepts',
      completed: false
    }
  ]
}
