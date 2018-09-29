import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { HumanResourceRoutingModule, routedComponents } from './human-resource-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { PayrollComponent } from './payroll/payroll.component';
import { LeavesComponent } from './leaves/leaves.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    HumanResourceRoutingModule,    
  ],
  declarations: [
    ...routedComponents,
    PayrollComponent,
    LeavesComponent,
    EmployeeComponent,
  ],
  providers: [
    SmartTableService,
  ],
})
export class HumanResourceModule { }
