import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public datos: any, private usersService: UsersService){
    this.profileForm = this.formBuilder.group({
      name: [this.datos?.name || '', Validators.required],
      lastName: [this.datos?.lastName || '', Validators.required],
      doc: [this.datos?.doc || '', Validators.required],
      // completed: [this.datos?.completed || false, Validators.required],
    });
  }

  updateUser(id: string){}

  createUser(){
    this.usersService.createUser(this.profileForm.value);
    this.usersService.cerrarModal();
  }


}
