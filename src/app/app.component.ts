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
    task: "finish escalation database",
    completed: false
    },
    {
    task: "get attending physician form signed",
    completed: false
    },
    {
    task: "call UNUM",
    completed: true  
    }
  ]
  addTask(x: NgForm): void{
    let newTask: ToDo = {
      task: x.form.value,
      completed: false
    }
    this.toDos.push
  }
  completeTask(x: ToDo): void{
    x.completed = true
    console.log(x.task)
    console.log(x.completed)
  }
}
