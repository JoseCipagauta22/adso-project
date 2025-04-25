import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';

const routes: Routes = [
  {
    path: '',
    component:AdminPageComponent,
    children:[
      {
        path: 'users',
        loadChildren: () => import('./features-modules/users/users.module').then(childRouting => childRouting.UsersModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('./features-modules/clients/clients.module').then(childRouting => childRouting.ClientsModule)
      },
      {
        path: '**',
        redirectTo: 'users'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
