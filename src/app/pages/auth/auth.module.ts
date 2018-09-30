import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AuthRoutingModule, routedComponents } from './auth-routing.module';
import { RoleComponent } from './role/role.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  imports: [
    ThemeModule,
    AuthRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    RoleComponent,
  ],
  providers: [
  ],
})
export class AuthModule { }
