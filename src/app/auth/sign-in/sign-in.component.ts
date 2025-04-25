import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  signInForm: FormGroup;
  showProgressBar: Boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router){
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  signIn(){
    console.log(this.signInForm.value);
    this.showProgressBar = true;
    setTimeout(() => {
      this.showProgressBar = false;
      this.signInForm.reset({email: '', password: ''});
      this.router.navigate(['/admin-page']);
    }, 3000);
  }

}
