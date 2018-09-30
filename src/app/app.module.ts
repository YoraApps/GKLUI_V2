/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonViewComponent } from './pages/settings/popupbranch/popupbranch.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { ReviewButtonViewComponent } from './pages/admission/reviewand-approve/reviewand-approve.component';
import { ModalComponent} from './pages/ui-features/modals/modal/modal.component'
import { BatchModalComponent } from './pages/settings/batch/batch-modal/batch-modal.component';
import { CourseModalComponent } from './pages/settings/course/course-modal/course-modal.component';
import { ScheduleComponent } from './pages/admission/scheduleexamination/schedule/schedule.component';
import { ScheduleExamModalService } from './pages/admission/data/scheduleexammodal.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { VehicalModelComponent } from './pages/transportation/vehicle/vehical-model/vehical-model.component';
import { DriverModelComponent } from './pages/transportation/driver-master/driver-model/driver-model.component';
import { LocationModelComponent } from './pages/transportation/location/location-model/location-model.component';
import { RouteCreationModelComponent } from './pages/transportation/routecreation/route-creation-model/route-creation-model.component';
import { AssignRouteModelComponent } from './pages/transportation/assign-route/assign-route-model/assign-route-model.component';
import { ProgramStudyModelComponent } from './pages/settings/program-study/program-study-model/program-study-model.component';
import { SemesterModelComponent } from './pages/settings/semester/semester-model/semester-model.component';
import { ChapterModelComponent } from './pages/settings/chapter/chapter-model/chapter-model.component';
import { ExamTypeModelComponent } from './pages/settings/exam-type/exam-type-model/exam-type-model.component';
import { GroupModelComponent } from './pages/settings/group/group-model/group-model.component';
import { GradeModelComponent } from './pages/settings/grade/grade-model/grade-model.component';
import { ClubModelComponent } from './pages/settings/club/club-model/club-model.component';
import { FacultyModelComponent } from './pages/settings/faculty-department/faculty-model/faculty-model.component';
import { FeeModelComponent } from './pages/settings/fee/fee-model/fee-model.component';
import { ClassRoomModelComponent } from './pages/settings/classroom/class-room-model/class-room-model.component';
import { BatchProgramModelComponent } from './pages/settings/batch-program-association/batch-program-model/batch-program-model.component';
import { ProgramBranchModelComponent } from './pages/settings/program-branch-association/program-branch-model/program-branch-model.component';
import { FeeAssociationModelComponent } from './pages/settings/fee-association/fee-association-model/fee-association-model.component';
import { BranchSemesterModelComponent } from './pages/settings/branch-semester-association/branch-semester-model/branch-semester-model.component';
import { SemesterCourseModelComponent } from './pages/settings/semester-course-association/semester-course-model/semester-course-model.component';

@NgModule({
  declarations: [AppComponent, 
    ButtonViewComponent,
    ReviewButtonViewComponent,
    ModalComponent,
    BatchModalComponent, 
    CourseModalComponent,
    ScheduleComponent,
    VehicalModelComponent,
    DriverModelComponent,
    LocationModelComponent,
    RouteCreationModelComponent,
    AssignRouteModelComponent,
    ProgramStudyModelComponent,
    SemesterModelComponent,
    ChapterModelComponent,
    ExamTypeModelComponent,
    GroupModelComponent,
    GradeModelComponent,
    ClubModelComponent,
    FacultyModelComponent,
    FeeModelComponent,
    ClassRoomModelComponent,
    BatchProgramModelComponent,
    ProgramBranchModelComponent,
    BranchSemesterModelComponent,
    SemesterCourseModelComponent,
    FeeAssociationModelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SmartTableModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AuthGuardService,
    AuthService,
    ScheduleExamModalService
  ],
  entryComponents: [
    ButtonViewComponent,
    ReviewButtonViewComponent,
    ModalComponent,
    BatchModalComponent,
    CourseModalComponent,
    ScheduleComponent,
    VehicalModelComponent,
    DriverModelComponent,
    LocationModelComponent,
    RouteCreationModelComponent,
    AssignRouteModelComponent,
    ProgramStudyModelComponent,
    SemesterModelComponent,
    ChapterModelComponent,
    ExamTypeModelComponent,
    GroupModelComponent,
    GradeModelComponent,
    ClubModelComponent,
    FacultyModelComponent,
    FeeModelComponent,
    ClassRoomModelComponent,
    BatchProgramModelComponent,
    ProgramBranchModelComponent,
    BranchSemesterModelComponent,
    SemesterCourseModelComponent,
    FeeAssociationModelComponent,
  ],
})
export class AppModule {
}
