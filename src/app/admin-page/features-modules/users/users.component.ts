import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from './services/users.service';
import { FormularioComponent } from './components/formulario/formulario.component';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  constructor(public dialogo: MatDialog, private usersService: UsersService){}

  openModal(){
    this.usersService.guardarDialogoRef(this.dialogo.open(FormularioComponent, {height: '500px', width:'460px'}));
  }
}
