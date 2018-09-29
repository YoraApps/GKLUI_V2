import { Injectable } from '@angular/core';

@Injectable()
export class ClassRoomService {

  data = [{
    ClassRoomId: 1,
    BuildingCode: '1A',
    BuildingName: 'qwerty',
    RoomCode: '1',
    RoomName: '	Jason',
    CapacityofRoom: 50,
    Facility: '	LCD, TV,AC',
    Location: 'hyd',
  },
   {
    ClassRoomId: 2,
    BuildingCode: '2A',
    BuildingName: 'master',
    RoomCode: '11',
    RoomName: 'asdfg',
    CapacityofRoom: 45,
    Facility: '	LCD, TV,AC',
    Location: 'hyderabad',
  }];

  getData() {
    return this.data;
  }
}

