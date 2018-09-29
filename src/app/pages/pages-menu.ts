import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-grid-a-outline',
    link: '/admission/admission-list',
    home: true,
  },
  {
    title: 'Admission',
    icon: 'nb-compose',
    children: [
      {
        title: 'Admission Form',
        link: '/pages/admission/admission-list',
      },
      {
        title: 'Counselling',
        link: '/pages/admission/counselling',
      },     
      {
        title: 'Admission Fee Status',
        link: '/pages/admission/admission-fee-status',
      },
      {
        title: 'Exam Result Upload',
        link: '/pages/admission/examresultupload',
      },
      {
        title: 'Applicant Course Fee',
        link: '/pages/admission/applicant-course-fee-status',
      },
      {
        title: 'Review And Approve',
        link: '/pages/admission/reviewand-approve',
      },
      {
        title: 'Id Cards',
        link: '/pages/admission/IdCard',
      },
      {
        title: 'Schedule Examination',
        link: '/pages/admission/Scheduleexamination',
      },
    ],
  },
  {
    title: 'Academics',
    icon: 'nb-tables',
    children: [
      {
        title: 'Memo-Circular-Notice',
        link: '/pages/academics/memo-circular-notice',
      },
      {
        title: 'conduct',
        link: '/pages/academics/conduct',
      },
      {
        title: 'Campaign Management',
        link: '/pages/academics/Campaign-Management',
      },
      {
        title: 'Approve Deputation',
        link: '/pages/academics/approvedeputation',
      },
      {
        title: 'Teacher Notes',
        link: '/pages/academics/teachernote',
      },
      {
        title: 'Student Dairy',
        link: '/pages/academics/Studentdairy',
      },
      {
        title: 'Set Examination Marks',
        link: '/pages/academics/Examination',
      },
      {
        title: 'Asssign Exam',
        link: '/pages/academics/AsssignExamToStudent',
      },
    ],
  },
  {
    title: 'Transportation',
    icon: 'nb-location',
    children: [
      {
        title: 'Location',
        link: '/pages/transportation/location',
      },
      {
        title: 'Vehicle',
        link: '/pages/transportation/vehicle',
      },
      {
        title: 'Driver',
        link: '/pages/transportation/driver',
      },
      {
        title: 'Route Creation',
        link: '/pages/transportation/routecreation',
      },
      {
        title: 'Assign Route',
        link: '/pages/transportation/assignroute',
      },
    ],
  },
  {
    title: 'Human-Resourse',
    icon: 'nb-person',
    children: [
      {
        title: 'Staff-Management',
        link: '/pages/human-resource/staff-management',
      },
      {
        title: 'Payroll',
        link: '/pages/human-resource/payroll',
      },
      {
        title: 'Leaves',
        link: '/pages/human-resource/Leaves',
      },
    ],
  },
  {
    title: 'Account',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Account-Summary',
        link: '/pages/account/account-summary',
      },
      {
        title: 'Manage-Payment',
        link: '/pages/account/managepayment',
      },
    ],
  },
  {
    title: 'Academic Settings',
    icon: 'nb-gear',
    children: [
      {
        title: 'Drgree Category ',
        link: '/pages/settings/degree-category',
      },
      {
        title: 'Degree Type',
        link: '/pages/settings/degree-type',
      },
      {
        title: 'Program ',
        link: '/pages/settings/program',
      },
      {
        title: 'Branch',
        link: '/pages/settings/branch',
      },
        {
        title: 'Batch ',
        link: '/pages/settings/batch',
      },
      {
      title: 'Academic Setup ',
      link: '/pages/settings/academic-setup',
    },
      // {
      //   title: 'Program Branch Association',
      //   link: '/pages/settings/program-branch-association',
      // },
      // {
      // title: 'Batch Program Association ',
      // link: '/pages/settings/batch-program-association',
      // },
      {
      title: 'Course ',
      link: '/pages/settings/course',
      },
      // {
      //   title: 'Exam Type',
      //   link: '/pages/settings/exam-type',
      // },
      // {
      //   title: 'Chapter',
      //   link: '/pages/settings/chapter',
      // },
      // {
      //   title: 'Class Room',
      //   link: '/pages/settings/classroom',
      // },
      // {
      //   title: 'Club',
      //   link: '/pages/settings/club',
      // },
      // {
      //   title: 'Fee',
      //   link: '/pages/settings/fee',
      // },
      // {
      //   title: 'Group',
      //   link: '/pages/settings/group',
      // },
      // {
      //   title: 'Popup',
      //   link: '/pages/settings/popupbranch',
      // },
      // {
      //   title: 'Faculty-Department',
      //   link: '/pages/settings/faculty-department',
      // },
      // {
      //   title: 'Program-Study',
      //   link: '/pages/settings/program-study',
      // },
      // {
      //   title: 'Grade',
      //   link: '/pages/settings/grade',
      // },
          {
            title: 'Semester',
          link: '/pages/settings/semester',
        },
      {
        title: 'Fee Association',
        link: '/pages/settings/feeassociation',
      },
      // {
      //   title: 'Student Profile',
      //   link: '/pages/settings/studentprofile',
      // },
    ],
  },
  {
    title: 'Manage-Settings',
    icon: 'nb-grid-b-outline',
    children: [
      {
        title: 'Program Sem Association',
        link: '/pages/manage-settings/program-sem-association',
      },
      {
        title: 'Manage Course',
        link: '/pages/manage-settings/manage-course',
      },
      {
        title: 'Manage Curriculum',
        link: '/pages/manage-settings/manage-curriculum',
      },
      {
        title: 'Manage Batch',
        link: '/pages/manage-settings/manage-batch',
      },
      {
        title: 'Manage Semester',
        link: '/pages/manage-settings/manage-semester',
      },
      {
        title: 'Assign Student To Group',
        link: '/pages/manage-settings/assign-student-to-group',
      },
      {
        title: 'Manage Faculty Department',
        link: '/pages/manage-settings/manage-faculty-department',
      },
      {
        title: 'Assign Councelor To Group',
        link: '/pages/manage-settings/assign-councelor-to-group',
      },
      {
        title: 'Manage Club',
        link: '/pages/manage-settings/manage-club',
      },
      {
        title: 'Manage Student Curriculam',
        link: '/pages/manage-settings/manage-student-curriculam',
      },
      
    ],
  },
];
