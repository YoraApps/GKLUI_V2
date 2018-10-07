import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {  routedComponents, MachineLearningRoutingModule } from './machine-learning-routing.module';
import { DataTableComponent } from './data-table/data-table.component';
import { GraphComponent } from './graph/graph.component';
import { PredictionComponent } from './prediction/prediction.component';

@NgModule({
  imports: [
    ThemeModule,
    MachineLearningRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    
  ],
})
export class MachineLearningModule { }
