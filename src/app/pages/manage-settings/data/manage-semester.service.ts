import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ManageSemesterService {

    data = [{
        StudentNumber: 1,
        StudentName: 'asdfg',
        EmailId :'abcd@gmail.com',
        ContactNumber:123456,
        JoiningDate:20/2/2018
    },
    {
        StudentNumber: 2,
        StudentName: 'sony',
        EmailId :'sonyd@gmail.com',
        ContactNumber:123456888,
        JoiningDate:20/4/2018
    },
    ];
    getData() {
        return this.data;
    }
}