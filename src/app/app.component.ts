import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-to-do';
  toDos: ToDo[] = [
    {
    task: "task one",
    completed: false
    },
    {
    task: "task two",
    completed: false
    },
    {
    task: "task three",
    completed: true  
    },
    {
    task: "task four",
    completed: false
    }
  ]
  addTask(formParam: NgForm): void{
    let newTask: ToDo = {
      task: formParam.form.value.toDoTask,
      completed: false
    }
    this.toDos.push(newTask)
  }
  completeTask(task: ToDo): void{
    task.completed = true
  }
}
