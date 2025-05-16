import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interfaces/task';
import { FormComponent } from '../components/form/form.component';
import { MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksDataSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksDataSubject.asObservable();
  dialogoRef: MatDialogRef<FormComponent> | undefined;

  constructor(private httpClient: HttpClient) { }

  guardarDialogoRef(dialogoRef: MatDialogRef<FormComponent>) {
    this.dialogoRef = dialogoRef;
  }

  cerrarModal(){
    this.dialogoRef.close();
    this.dialogoRef = undefined;
  }

  public getTasks() {
    this.httpClient.get<Task[]>(`http://localhost:3000/tasks`).subscribe(data => {
      this.tasksDataSubject.next(data);
    });
  }

  public createTask(task: Task){
    this.httpClient.post<Task>(`http://localhost:3000/tasks`, task).subscribe(data => {
      this.tasksDataSubject.next([...this.tasksDataSubject.value, data]);
    });
  }

  public updateTask(task: Task, id: number){
    this.httpClient.put<Task>(`http://localhost:3000/tasks/${id}`, task).subscribe(data => {
      let tasks = this.tasksDataSubject.value;
      let indiceActualizar = tasks.findIndex(elemento => elemento.id == id);
      tasks[indiceActualizar] = data;
      this.tasksDataSubject.next([...tasks]);
    });
  }

  public deleteTask(id: number) {
    this.httpClient.delete<Task[]>(`http://localhost:3000/tasks/${id}`).subscribe(data => {
      this.tasksDataSubject.next(data);
    });
  }

}
