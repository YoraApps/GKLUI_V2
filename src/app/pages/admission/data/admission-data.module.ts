import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionListService } from './admission-list.service';
import { CounsellingService } from './counselling.service';
import { BatchService } from '../../settings/data/batch.service';
import { CourseService } from '../../settings/data/course.service';
import { AdmissionFeeStatusService } from './admission-fee-status.service';

const SERVICES = [
  AdmissionListService,
  CounsellingService,
  BatchService,
  CourseService,
  AdmissionFeeStatusService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class AdmissionDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: AdmissionDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
