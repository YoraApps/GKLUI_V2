import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { StudentCharacterSupervisionService } from '../data/student-character-supervision.service';
import { MeritAndDemeritsService } from '../data/merit-and-demerits.service';

@Component({
  selector: 'ngx-conduct',
  templateUrl: './conduct.component.html',
  styleUrls: ['./conduct.component.scss'],
})
export class ConductComponent implements OnInit {

 settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      ReportName: {
        title: 'Report Name',
        type: 'string',
      },
      StudentName: {
        title: 'Student Name',
        type: 'string',
      },
      CounsellorName: {
        title: 'Counsellor Name',
        type: 'string',
      },
      Excellent: {
        title: 'Excellent',
        type: 'string',
      },
      Standard: {
        title: 'Standard',
        type: 'string',
      },
      Disturbance: {
        title:  'Disturbance',
        type: 'string',
      },
      Remark: {
        title: 	'Remark',
        type: 'string',
      },
    },
  };
 conductsettings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      DateAndDay: {
        title: 'Date And Day',
        type: 'date',
      },
      GoodConduct: {
        title: 'Good Conduct',
        type: 'string',
      },
      MisConduct: {
        title: 'Mis Conduct',
        type: 'string',
      },
      ActionTeacher: {
        title: 'Action Teacher',
        type: 'string',
      },
      Venue: {
        title: 'Venue',
        type: 'string',
      },
      ClassMonitorWitness: {
        title:  'ClassMonitor Witness',
        type: 'string',
      },
    },
  };
   LossAndFoundsettings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Name: {
        title: 'Name',
        type: 'string',
      },
      Class: {
        title: 'Class',
        type: 'string',
      },
      Things: {
        title: 'Things',
        type: 'string',
      },
      LostDate: {
        title: 'Lost Date',
        type: 'date',
      },
      FoundDate: {
        title: 'Found Date',
        type: 'date',
      },
      Type: {
        title:  'Type ',
        type: 'string',
      },
    },
  };
  LetterPermissionsettings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Name: {
        title: 'Name',
        type: 'string',
      },
      Course: {
        title: 'Course',
        type: 'string',
      },
      Date: {
        title: 'Date',
        type: 'date',
      },
      TimeIn: {
        title: 'Time In',
        type: 'date',
      },
      TimeOut: {
        title: 'Time Out',
        type: 'date',
      },
    },
  };


  source: LocalDataSource = new LocalDataSource();
  _source: LocalDataSource = new LocalDataSource();
  LossAndFoundsource: LocalDataSource = new LocalDataSource();
  LetterPermissionsource: LocalDataSource = new LocalDataSource();
  constructor(private service: StudentCharacterSupervisionService, private  _service: MeritAndDemeritsService) {
    const data = this.service.getData();
    const data1 = this._service.getData1();
    const LossAndFounddata = this.service.getLossAndFounddata();
    const LetterPermissiondata = this.service.getLetterPermissiondata();
    this.source.load(data);
    this._source.load(data1);
    this.LossAndFoundsource.load(LossAndFounddata);
    this.LetterPermissionsource.load(LetterPermissiondata);
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
  }

}
