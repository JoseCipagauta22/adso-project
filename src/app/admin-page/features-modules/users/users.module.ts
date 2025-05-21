import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MaterialModule } from '../../../material/material.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    UsersComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers:[
    provideHttpClient(withInterceptorsFromDi()),
    UsersService,
  ]
})
export class UsersModule { }
