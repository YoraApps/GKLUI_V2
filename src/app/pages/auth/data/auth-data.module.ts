import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleserviceService } from './roleservice.service'

const SERVICES = [
  RoleserviceService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class AuthDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule:AuthDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
