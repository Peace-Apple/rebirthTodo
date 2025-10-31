import { Component } from '@angular/core';
import { TodoItem } from '../todo-item';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  todoItems: TodoItem[] = [
    {
      id: uuidv4(),
      task: 'Review Angular concepts',
      completed: false
    }
  ]
}
