import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksDataSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksDataSubject.asObservable();
  public payload = { tittle: 'mi id 5 editado', completed: true };

  constructor(private httpClient: HttpClient) { }

  public getTasks() {
    this.httpClient.get<Task[]>(`http://localhost:3000/tasks`).subscribe(data => {
      this.tasksDataSubject.next(data);
      console.log(data);
      
    });
  }

  public createTask(){
    this.httpClient.post<Task[]>(`http://localhost:3000/tasks`, this.payload).subscribe(data => {
      this.tasksDataSubject.next(data);
      console.log(data);
    });
  }

  public updateTask(){
    this.httpClient.put<Task[]>(`http://localhost:3000/tasks/5`, this.payload).subscribe(data => {
      this.tasksDataSubject.next(data);
      console.log(data);
    });
  }

  public deleteTask() {
    this.httpClient.delete<Task[]>(`http://localhost:3000/tasks/2`).subscribe(data => {
      this.tasksDataSubject.next(data);
      console.log(data);
    });
  }

}
