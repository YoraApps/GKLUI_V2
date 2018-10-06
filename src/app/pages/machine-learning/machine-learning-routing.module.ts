import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  MachineLearningComponent } from './machine-learning.component';
import { PredictionComponent } from './prediction/prediction.component';
import { GraphComponent } from './graph/graph.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [{
  path: '',
  component: MachineLearningComponent,
  children: [
    {
      path: 'ngx-prediction',
      component: PredictionComponent,
    },
    {
      path: 'ngx-graph-data',
      component: GraphComponent,
    },
    {
      path: 'ngx-data-table',
      component: DataTableComponent,
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
export class MachineLearningRoutingModule {

}

export const routedComponents = [
  MachineLearningComponent,
];
