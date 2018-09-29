import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { ManagepaymentComponent } from './managepayment/managepayment.component';



const routes: Routes = [{
  path: '',
  component: AccountComponent,
  children: [{
    path: 'account-summary',
    component: AccountSummaryComponent,
  }, {
      path: 'managepayment',
      component: ManagepaymentComponent,
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
export class AccountRoutingModule {

}

export const routedComponents = [
  AccountComponent,
  AccountSummaryComponent,
];
