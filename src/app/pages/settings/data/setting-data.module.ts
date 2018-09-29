import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreeTypeService } from './degree-type.service';
import { DegreeCategoryService } from './degree-category.service';
import { CourseService } from './course.service';
import { BranchService } from './branch.service';
import { BatchService } from './batch.service';
import { PopupService } from './popup.service';
import { ExamTypeService } from './exam-type.service';
import { ChapterService } from './chapter.service';
import { LocationService } from './location.service';
import { VehicleService } from './vehicle.service';
import { DriverMasterService } from './driver-master.service';
import { ClassRoomService } from './classroom.service';
import { ClubService } from './club.service';
import { AcademicMasterService } from './academic-master.service';
import { GroupService } from './group.service ';
import { FeeService } from './fee.service';


const SERVICES = [
  DegreeTypeService,
  CourseService,
  DegreeCategoryService,
  BranchService,
  BatchService,
  PopupService,
  ExamTypeService,
  ChapterService,
  LocationService,
  VehicleService,
  DriverMasterService,
  ClassRoomService,
  ClubService,
  AcademicMasterService,
  GroupService,
  FeeService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class SettingDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SettingDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
