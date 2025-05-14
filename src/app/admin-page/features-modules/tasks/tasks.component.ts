import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  constructor( private tasksService: TasksService ){}

  getTask(){
    this.tasksService.getTasks();
  }

  createTask(){
    this.tasksService.createTask();
  }

  updateTask(){
    this.tasksService.updateTask();
  }

  deleteTask(){
    this.tasksService.deleteTask();
  }

}
