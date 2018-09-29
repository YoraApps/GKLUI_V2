import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ManageClubService {

    data = [{
        StudentNumber: 1,
        StudentName: 'asdfg',
        EmailId: 'abc@gmail.com',
        JoiningDate: 2017 - 12 - 2,
    },
    {
        StudentNumber: 2,
        StudentName: 'asdfg',
        EmailId: 'abc@gmail.com',
        JoiningDate: 2017 - 12 - 2,
    },
    ];
    getData() {
        return this.data;
    }
}