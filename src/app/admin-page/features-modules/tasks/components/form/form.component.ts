import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  profileForm: FormGroup;
  checked = false;
  disabled = false;

  constructor(
    private formBuilder: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public datos: any,
    private taskService: TasksService,
  ){
    console.log(this.datos, 'dtos');
    
    this.profileForm = this.formBuilder.group({
      tittle: [this.datos?.tittle || '', Validators.required],
      completed: [this.datos?.completed || false, Validators.required],
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profileForm.patchValue({ imagen: file });
    }
  }

  createTask(){
    this.taskService.createTask(this.profileForm.value);
    this.taskService.cerrarModal();
  }

  updateTask(id: number){
    this.taskService.updateTask(this.profileForm.value, id);
    this.taskService.cerrarModal();
  }



}
