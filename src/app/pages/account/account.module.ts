import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AccountRoutingModule, routedComponents } from './account-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { ManagepaymentComponent } from './managepayment/managepayment.component';
import { AccountSummaryService } from './data/account-summary.service';
import { ManagepaymentService } from './data/managepayment.service';




@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    AccountRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    ManagepaymentComponent,
  ],
  providers: [
    SmartTableService,
    AccountSummaryService,
    ManagepaymentService,
  ],
})
export class AccountModule { }
