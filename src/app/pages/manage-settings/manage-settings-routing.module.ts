import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageSettingsComponent } from './manage-settings.component';
import { ProgramSemAssociationComponent } from './program-sem-association/program-sem-association.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { ManageCurriculumComponent } from './manage-curriculum/manage-curriculum.component';
import { ManageBatchComponent } from './manage-batch/manage-batch.component';
import { ManageSemesterComponent } from './manage-semester/manage-semester.component';
import { ManageClubComponent } from './manage-club/manage-club.component';
import { ManageStudentCurriculamComponent } from './manage-student-curriculam/manage-student-curriculam.component';
import { AssignCouncelorToGroupComponent } from './assign-councelor-to-group/assign-councelor-to-group.component';
import { AssignStudentToGroupComponent } from './assign-student-to-group/assign-student-to-group.component';
import { ManageFacultyDepartmentComponent } from './manage-faculty-department/manage-faculty-department.component';



const routes: Routes = [{
  path: '',
  component: ManageSettingsComponent,
  children: [{
    path: 'program-sem-association',
    component: ProgramSemAssociationComponent,
  },
  {
    path: 'manage-course',
    component: ManageCourseComponent,
  },
  {
    path: 'manage-curriculum',
    component: ManageCurriculumComponent,
  },
  {
    path: 'manage-batch',
    component: ManageBatchComponent,
  },
  {
    path: 'manage-semester',
    component: ManageSemesterComponent,
  },
  {
    path: 'manage-club',
    component: ManageClubComponent,
  },
  {
    path: 'manage-student-curriculam',
    component: ManageStudentCurriculamComponent,
  },
  {
    path: 'assign-councelor-to-group',
    component: AssignCouncelorToGroupComponent,
  },
  {
    path: 'assign-student-to-group',
    component: AssignStudentToGroupComponent,
  },  
  {
    path: 'manage-faculty-department',
    component: ManageFacultyDepartmentComponent,
  },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ManageSettingsRoutingModule {

}

export const routedComponents = [
  ManageSettingsComponent,
  ProgramSemAssociationComponent,
  ManageCourseComponent,
  ManageCurriculumComponent,
];
