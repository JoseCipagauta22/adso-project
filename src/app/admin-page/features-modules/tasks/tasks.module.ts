import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../material/material.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TasksService } from './services/tasks.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    // HttpClientModule,
    TasksRoutingModule,
    MaterialModule,
  ],
  providers:[
    provideHttpClient(withInterceptorsFromDi()),
    TasksService,
  ]
})
export class TasksModule { }
