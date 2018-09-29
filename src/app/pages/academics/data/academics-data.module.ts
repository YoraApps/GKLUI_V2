import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoCircularNoticeService } from './memo-circular-notice.service';
import { StudentCharacterSupervisionService } from './student-character-supervision.service';
import { MeritAndDemeritsService } from './merit-and-demerits.service';


const SERVICES = [
  MemoCircularNoticeService,
  StudentCharacterSupervisionService,
  MeritAndDemeritsService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class AcademicsDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: AcademicsDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
