import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AssignStudentToGroupService {

    data = [{
        StudentNumber: 1,
        StudentName: 'asdfg',
        EmailId: 'abc@gmail.com'
    },
    {
        StudentNumber: 2,
        StudentName: 'asdfg',
        EmailId: 'abc@gmail.com'
    },
    ];
    getData() {
        return this.data;
    }
}