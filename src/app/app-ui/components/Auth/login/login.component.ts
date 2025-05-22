import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../../../layout/component/app.floatingconfigurator';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    RouterModule,
    RippleModule,
    AppFloatingConfigurator
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  checked: boolean = false;
  loginObj: any = {
    email: 'string',
    password: 'string'
  }
  //constructor(private router: Router) { }
  constructor(private router: Router, private authService: AuthService) { }

  onLogin() {
    const loginData = {
      username: this.loginObj.email,
      password: this.loginObj.password,
    };
    localStorage.removeItem('token1');
    localStorage.removeItem('token2');
    this.authService.onLogin(loginData).subscribe((response: any) => {
      //console.log(response);
      if (response) {
        localStorage.setItem('token1', response.data.accessToken)
        localStorage.setItem('token2', response.data.refreshToken)
        this.router.navigate(['']);
        alert("Successful Login");

      } else {
        alert(response.message);
      }
    });
  }
}
