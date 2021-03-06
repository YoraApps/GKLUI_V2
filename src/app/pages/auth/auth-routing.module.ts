import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { RoleComponent } from './role/role.component';



const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [{
    path: 'role',
    component: RoleComponent,
  },       
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthRoutingModule {

}

export const routedComponents = [
  AuthComponent,
];
