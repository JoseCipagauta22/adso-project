import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  constructor(public dialogo: MatDialog, private tasksService: TasksService  ){}

  openModal(){
    this.tasksService.guardarDialogoRef(this.dialogo.open(FormComponent, {height: '500px', width:'460px'}));
  }

  getTask(){
    this.tasksService.getTasks();
  }

  createTask(){
    // this.tasksService.createTask();
  }

  updateTask(){
    // this.tasksService.updateTask();
  }

  deleteTask(){
    // this.tasksService.deleteTask();
  }

}
