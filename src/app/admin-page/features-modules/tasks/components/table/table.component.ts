import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Task } from '../../interfaces/task';
import { TasksService } from '../../services/tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  // tasks: Task[] = [];
  displayedColumns: string[] = ['id', 'tittle', 'completed', 'acciones'];
  task$: Observable<Task[]>;
  private tasksSubscripcion: Subscription | undefined;

  constructor(private tasksService: TasksService, public dialogo: MatDialog, private snackBar: MatSnackBar){
    this.tasksService.getTasks();
    this.task$ = this.tasksService.tasks$;
    // this.tasksService.tasks$.subscribe(tasks => console.log(tasks, 'mis tasks'));
    // this.tasksSubscripcion = this.tasksService.tasks$.subscribe(tasks => this.tasks = tasks);
  }


  
  actualizarRegistro(task: Task){
    // let ModalPersona = {persona: task};
    this.tasksService.guardarDialogoRef(this.dialogo.open(FormComponent, {height: '600px', width:'480px', data: task}));
  }

  eliminarPersona(id: number){
    this.tasksService.deleteTask(id);
    this.snackBar.open('Registro eliminado con éxito', 'Cerrar', {
      duration: 3000,
    });
  }

  ngOnDestroy(): void {
    if (this.tasksSubscripcion) {
      this.tasksSubscripcion.unsubscribe();
    }
  }



}
