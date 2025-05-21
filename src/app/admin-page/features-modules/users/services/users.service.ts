import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormularioComponent } from '../components/formulario/formulario.component';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

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
        console.log('mi data', data);
        
        // this.tasksDataSubject.next([...this.tasksDataSubject.value, data]);
      });
    }


}
