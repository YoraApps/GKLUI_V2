import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesService } from './leaves.service';


const SERVICES = [
  LeavesService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,

  ],
})

export class HumanResourceDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: HumanResourceDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
