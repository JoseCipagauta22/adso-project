import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormularioComponent } from '../components/formulario/formulario.component';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userDataSubject = new BehaviorSubject<User[]>([]);
  public user$ = this.userDataSubject.asObservable();
  dialogoRef: MatDialogRef<FormularioComponent> | undefined;

  constructor(private httpClient: HttpClient) { }
  
  guardarDialogoRef(dialogoRef: MatDialogRef<FormularioComponent>) {
    this.dialogoRef = dialogoRef;
  }

  cerrarModal(){
    this.dialogoRef.close();
    this.dialogoRef = undefined;
  }

  public createUser(user: User){
    this.httpClient.post<User>(`http://localhost:3000/users`, user).subscribe(data => {
      this.userDataSubject.next([...this.userDataSubject.value, data]);
    });
  }

  public getUsers(){
    this.httpClient.get<User[]>(`http://localhost:3000/users`).subscribe(data => {      
      this.userDataSubject.next(data);
    });
  }

  public updateUser(user: User, id: number){
    console.log('user', user, id);
    this.httpClient.put<User>(`http://localhost:3000/users/${id}`, user).subscribe(data => {
      let tasks = this.userDataSubject.value;
      let indiceActualizar = tasks.findIndex(elemento => elemento.id == id);
      tasks[indiceActualizar] = data;
      this.userDataSubject.next([...tasks]);
    });
  }


  public deleteUsuario(id: number) {
    this.httpClient.delete<User[]>(`http://localhost:3000/users/${id}`).subscribe(data => {
      this.userDataSubject.next(data);
    });
  }


}
