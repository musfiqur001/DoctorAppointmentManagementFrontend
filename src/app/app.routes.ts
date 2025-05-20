import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { HomeComponent } from './app-ui/components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      { path: '', component: HomeComponent },
      //{ path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
      //{ path: 'documentation', component: Documentation },
      //{ path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
    ]
  }
  //{ path: 'landing', component: Landing },
  //{ path: 'notfound', component: Notfound },
  //{ path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
  //{ path: '**', redirectTo: '/notfound' }
];
