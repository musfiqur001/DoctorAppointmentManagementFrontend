import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { HomeComponent } from './app-ui/components/home/home.component';
import { LoginComponent } from './app-ui/components/Auth/login/login.component';
import { Notfound } from './app-ui/components/shared/notfound/notfound';
import { RegisterComponent } from './app-ui/components/Auth/register/register.component';
import { AppointmentComponent } from './app-ui/components/appointment/appointment.component';

export const routes: Routes = [
  //{
  //  path: '',
  //  redirectTo: 'Login',
  //  pathMatch: 'full'
  //},
  {
    path: '',
    component: AppLayout,
    children: [
      { path: '', component: HomeComponent },
      { path: 'Appointment', component: AppointmentComponent },
      //{ path: 'Login', component: LoginComponent },
      //{ path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
      //{ path: 'documentation', component: Documentation },
      //{ path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
    ]
  },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'notfound', component: Notfound },
  { path: '**', redirectTo: '/notfound' },
  //{ path: 'landing', component: Landing },
  //{ path: 'notfound', component: Notfound },
  //{ path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
  //{ path: '**', redirectTo: '/notfound' }
];
