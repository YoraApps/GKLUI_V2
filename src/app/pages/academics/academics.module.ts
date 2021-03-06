import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';

import { AcademicsRoutingModule , routedComponents} from './academics-routing.module';
import { ConductComponent } from './conduct/conduct.component';
import { MemoCircularNoticeService } from './data/memo-circular-notice.service';
import { ApproveDeputationComponent } from './approve-deputation/approve-deputation.component';
import { TeacherNotesComponent } from './teacher-notes/teacher-notes.component';
import { TeacherNotesService } from "./data/teacher-notes.service";

import { StudentDairyComponent } from './student-dairy/student-dairy.component';
import { StudentDairyService } from '../academics/data/studentDairy.service';
import { ExaminationComponent } from './examination/examination.component';
import { ExaminationService } from './data/examination.service';
import { AsssignExamToStudentComponent } from './asssign-exam-to-student/asssign-exam-to-student.component';
import { CreateSyllabusComponent } from './create-syllabus/create-syllabus.component';
import { SemesterCourseService } from '../settings/data/semester-course.service';
import { BranchSemesterService } from '../settings/data/branch-semester-service';
import { BatchProgramService } from '../settings/data/batch-program.service';
import { ProgramBranchService } from '../settings/data/program-branch.service';
import { BatchService } from '../settings/data/batch.service';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    AcademicsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    ConductComponent,
    ApproveDeputationComponent,
    TeacherNotesComponent,
    StudentDairyComponent,
    ExaminationComponent,
    AsssignExamToStudentComponent,
    CreateSyllabusComponent,
  ],
  providers: [
    SmartTableService,
    MemoCircularNoticeService,
    TeacherNotesService,
    StudentDairyService,
    ExaminationService,
    BatchService,
    ProgramBranchService,
    BatchProgramService,
    BranchSemesterService,
    SemesterCourseService,
  ],
})
export class AcademicsModule { }
