import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ManageSettingsRoutingModule, routedComponents } from './manage-settings-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { ManageCourseService } from './data/manage-course.service';
import { ManageCurriculumComponent } from './manage-curriculum/manage-curriculum.component';
import { ManageBatchComponent } from './manage-batch/manage-batch.component';
import { ManageSemesterComponent } from './manage-semester/manage-semester.component';
import { AssignStudentToGroupComponent } from './assign-student-to-group/assign-student-to-group.component';
import { AssignCouncelorToGroupComponent } from './assign-councelor-to-group/assign-councelor-to-group.component';
import { ManageClubComponent } from './manage-club/manage-club.component';
import { ManageStudentCurriculamComponent } from './manage-student-curriculam/manage-student-curriculam.component';
import { ManageFacultyDepartmentComponent } from './manage-faculty-department/manage-faculty-department.component';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    ManageSettingsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    ManageCourseComponent,
    ManageCurriculumComponent,
    ManageBatchComponent,
    ManageSemesterComponent,
    AssignStudentToGroupComponent,
    AssignCouncelorToGroupComponent,
    ManageClubComponent,
    ManageStudentCurriculamComponent,
    ManageFacultyDepartmentComponent,
  ],
  providers: [
    SmartTableService,
    ManageCourseService,
  ],
})
export class ManageSettingsModule { }
