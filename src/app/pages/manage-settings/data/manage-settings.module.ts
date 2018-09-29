import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';



const SERVICES = [
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ManageSettingsDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ManageSettingsDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
