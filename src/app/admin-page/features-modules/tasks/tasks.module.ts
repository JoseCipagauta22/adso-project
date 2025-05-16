import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../material/material.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TasksService } from './services/tasks.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TasksComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    // HttpClientModule,
    TasksRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[
    provideHttpClient(withInterceptorsFromDi()),
    TasksService,
  ]
})
export class TasksModule { }
