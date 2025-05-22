import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../../../layout/component/app.floatingconfigurator';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    RouterModule,
    RippleModule,
    AppFloatingConfigurator,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  userForm: FormGroup = new FormGroup(
    {
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      passwordConfirm: new FormControl('', Validators.required)
    },
    { validators: this.passwordMatchValidator }
  );
  passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('passwordConfirm')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  //constructor(private router: Router) { }
  router = inject(Router);
  authService = inject(AuthService);
  constructor() { }

  onRegister() {
    const formValue = this.userForm.value;
    this.authService.onRegister(formValue).subscribe((response: any) => {
      //console.log(response);
      if (response.success) {
        alert("Successful Registration");
        this.router.navigate(['/Login']);
      } else {
        alert(response.message);
      }
    });
  }
}
