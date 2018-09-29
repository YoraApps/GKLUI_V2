import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AssignCouncelorToGroupService {

    data = [{
        GroupCode: 1,
        GroupName: 'asdfg',
        EmployeeNumber:'Em004',
        EmployeeName:'sdfhgf',
        AssignedBy:'admin',        
    },
    {
        GroupCode: 2,
        GroupName: 'lkjh',
        EmployeeNumber:'mn@gmail.com',
        EmployeeName:'sdfhgf',
        AssignedBy:'admin',
    },
    ];
    getData() {
        return this.data;
    }
}