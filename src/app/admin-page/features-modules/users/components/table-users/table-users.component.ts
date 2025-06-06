import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { FormularioComponent } from '../formulario/formulario.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-users',
  standalone: false,
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.scss'
})
export class TableUsersComponent {

  displayedColumns: string[] = ['id', 'name', 'lastName', 'doc', 'acciones'];
  user$: Observable<User[]>;

  constructor(private usersService: UsersService, public dialogo: MatDialog,){
    this.usersService.getUsers();
    this.user$ = this.usersService.user$;
  }

  actualizarRegistro(user: User){
    this.usersService.guardarDialogoRef(this.dialogo.open(FormularioComponent, {height: '600px', width:'480px', data: user}));
  }
  

  // eliminarPersona(id: any){}
  eliminarUsuario(id: number){
    this.usersService.deleteUsuario(id);
  }

}
