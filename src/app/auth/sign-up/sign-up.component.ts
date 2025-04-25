import { Component, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  signUpForm: FormGroup;
  showProgressBar: Boolean = false;

  constructor(private formBuilder: FormBuilder){
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
    });

    this.signUpForm.controls['confirmPassword'].setValidators([
      Validators.required,
      this.compareValues('password'),
    ]);
  }

  compareValues(controlName: string): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const otherControl = this.signUpForm?.controls[controlName];
      if (otherControl && control.value !== otherControl.value) {
        return { notSame: true };
      }
      return null;
    };
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  hide2 = signal(true);
  clickEvent2(event: MouseEvent) {
    this.hide2.set(!this.hide2());
    event.stopPropagation();
  }

  signIn(){
    console.log(this.signUpForm.value);
    this.showProgressBar = true;
    setTimeout(() => {
      this.showProgressBar = false;
      this.signUpForm.reset({email: '', password: ''});
    }, 3000);
  }

}
