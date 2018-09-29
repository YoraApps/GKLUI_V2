import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ManageFacultyDepartmentService {

    data = [{
        ProgramStudyCode: 1,
        ProgramStudyName: 'asdfg',
    },
    {
        ProgramStudyCode: 2,
        ProgramStudyName: 'asdfg',
    },
    ];
    getData() {
        return this.data;
    }
}