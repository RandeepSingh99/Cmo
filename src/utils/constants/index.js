import governorImage from '../../../assets/images/governorImage.png';
import bhajanPhoto from '../../../assets/images/bhajanPhoto.png';
import premDCMPhoto from '../../../assets/images/premDCMPhoto.png';
import diyaPhoto from '../../../assets/images/diyaPhoto.png';
import cabMinister from '../../../assets/images/cabinetMinister.png';
import madanPhoto from '../../../assets/images/madanPhoto.png';
import rajRathorePhoto from '../../../assets/images/rajRathorePhoto.png';
import sanjaySMPhoto from '../../../assets/images/sanjaySMPhoto.png';
import gautamSMPhoto from '../../../assets/images/gautamSMPhoto.png';
import otaRamPhoto from '../../../assets/images/otaRamPhoto.png';
import manjuPhoto from '../../../assets/images/manjuPhoto.png';
import bhajanSecondPhoto from '../../../assets/images/bhajanSecondPhoto.png';
import chiefSecretaryImg from '../../../assets/images/secretaryRaj.png';

export const filterChip = [
  'All',
  'Event',
  'Quotes',
  'Success Stories',
  'Speeches',
  'Press Releases',
];

export const sections = [
  {
    title: 'About CMO',
    data: ['Key Officials', 'Distribution'],
  },
  {
    title: 'Success Stories',
    data: [],
  },
  {
    title: 'State Government',
    data: [
      'Governor',
      'Chief Minister',
      'Deputy Chief Minister',
      'Cabinet Minister',
      'State Minister (Independent Charge)',
      'State Minister',
      'MLA',
      'Chief Secretary',
    ],
  },
  {
    title: 'Media Corner',
    data: [
      'Press Releases',
      'CM Event',
      'Photo Gallery',
      'CM Quotes',
      'Awards',
      'Mega Events',
    ],
  },
  {
    title: 'Citizen Corner',
    data: ['CM Relief Fund', 'Budget 2024-2025 (Modified Budget)'],
  },
  {
    title: "HCM's Department",
    data: [
      'Department of Personnel (DoP)',
      'Excise Department',
      'Home Department',
      'Planning Department',
      'General Administration Department',
      // "Policy Making Cell: CM's Secretariat",
      'Information and Public Relations Department',
      'Anti Corruption Bureau (ACB)',
    ],
  },
  {
    title: 'Write to CM',
    data: [],
  },
  {
    title: 'Photo Booth',
    data: [],
  },
  {
    title: 'Our Government',
    data: [],
  },
  {
    title: 'List of former CMs',
    data: [],
  },
  // {
  //   title: 'Articles',
  //   data: [],
  // },
  // {
  //   title: 'Schemes',
  //   data: [],
  // },
  // {
  //   title: 'FAQ’s',
  //   data: [],
  // },
  {
    title: 'Feedback & Suggestion',
    data: [],
  },
  {
    title: 'Follow Us',
    data: [],
  },
  // {
  //   title: 'Help Desk',
  //   data: [],
  // },
  {
    title: 'Language',
    data: [],
  },
  {
    title: 'Privacy Policy',
    data: [],
  },
  {
    title: 'Terms & Conditions',
    data: [],
  },
  {
    title: 'About App',
    data: [],
  },
];
export const stateGovt = {
  governor: 'Governor',
  chiefMinister: 'Chief Minister',
  deputyChiefMinister: 'Deputy Chief Minister',
  stateMinisterIndependentCharge: 'State Minister (Independent Charge)',
  stateMinister: 'State Minister',
  mla: 'MLA',
  chiefSecretary: 'Chief Secretary',
  cabinetMinister: 'Cabinet Minister',
};

export const linkingStrings = {
  distribution: 'Distribution',
  budget: 'Budget',
  doP: 'DoP',
  excise: 'Excise',
  homeDepartment: 'Home Department',
  planningDepartment: 'Planning Department',
  generalAdministrationDepartment: 'General Administration Department',
  infoAndPublic: 'Information',
  acb: 'ACB',
  terms: 'Terms',
  followUs: 'Follow Us',
  policy: 'Privacy Policy',
};
export const govData = {
  Governor: [
    {
      name: 'Haribhau Kisanrao Bagade',
      post: 'Governor of Rajasthan',
      dob: '17 August 1945', // Removed the invisible character
      homeTown: 'Phulambri, Aurangabad, Maharashtra',
      social: {
        fb: '@RajBhavanJaipur',
        twitter: '@rajbhavanjaipur',
      },
      exec: 'Governor of Rajasthan from 31st July, 2024',
      atPresent:
        'Assumed the office of the Governor of Rajasthan on 31st July, 2024.',
      contact:
        'Governor’s secretariat, Raj Bhawan Jaipur EPABX: 0141-2228716-19, 2228722, 2228611, 2228612; FAX No: 0141-2221156',
      img: governorImage,
    },
  ],
  'Chief Minister': [
    {
      name: 'Sh. Bhajan Lal Sharma',
      post: 'Hon ble Chief Minister',
      dob: '15 December 1966', // Removed the invisible character
      homeTown: 'Bharatpur',
      social: {
        fb: '@CMORajasthan',
        twitter: '@CMORajasthan',
      },
      qualification: 'MA Political Science',
      fathersName: 'Kishan Swaroop Sharma',
      mothersName: 'Gomti Devi',
      description:
        'Shri Bhajanlal Sharma, the current Chief Minister of Rajasthan, is a luminary in Indian politics, noted for his pragmatic leadership and deep-seated values rooted in Indian cultural ',
      img: bhajanPhoto,
    },
  ],
  'Deputy Chief Minister': [
    {
      name: 'Smt. Diya Kumari',
      post: 'Deputy Chief Minister',
      department: [
        'Finance Department',
        'Tourism Department',
        'Department of Art Literature Culture and Archeology',
        'PWD',
        'Women & Child Development Department',
        'Child Empowerment Department',
      ],
      assembly: 'Vidhyadhar Nagar',
      img: diyaPhoto,
    },
    {
      name: 'Dr. Prem Chand Bairwa',
      post: 'Deputy Chief Minister',
      department: [
        'Technical Education Department',
        'Higher Education Department',
        'Ayurveda Yoga and Naturopathy Unani Siddha and Homeopathy (AYUSH) Department',
        'Transport and Road Safety Department',
      ],
      assembly: 'Vidhyadhar Nagar',
      img: premDCMPhoto,
    },
  ],
  'Cabinet Minister': [
    {
      name: 'Shri Kirodi Lal',
      phnNumber: '0141-2921023',
      post: 'Cabinet Minister',
      department: [
        'Agriculture and Horticulture Department',
        'Rural Development Department',
        'Disaster Management, Relief and Civil ',
        'Defense Department',
        'Public Prosecution Redressal Department',
      ],
      assembly: 'Sawai Madhopur',
      img: cabMinister,
    },
    {
      name: 'Shri Madan Dilawar',
      phnNumber: ' 01412921244',
      post: 'Cabinet Minister',
      department: [
        'School Education Department',
        'Panchayati Raj Department',
        'Sanskrit Education Department',
      ],
      assembly: 'Ramganj Mandi (SC)',
      img: madanPhoto,
    },
    {
      name: 'Col. Rajyavardhan Rathore',
      phnNumber: '01412921415',
      post: 'Cabinet Minister',
      department: [
        'Department of Industries and Commerce',
        'Department of Information Technology and Communications',
        'Department of Youth Affairs and Sports',
        'Department of Skills Planning and Entrepreneurship',
        'Department of Soldier Welfare',
      ],
      assembly: 'Jhotwara',
      img: rajRathorePhoto,
    },
  ],
  'State Minister (Independent Charge)': [
    {
      name: 'Shri Sanjay Sharma',
      phnNumber: '01412921415',
      post: 'Cabinet Minister',
      department: [
        'Medical and Health Department',
        'Medical and Health Services (ESI)',
      ],
      assembly: 'Jhotwara',
      img: sanjaySMPhoto,
    },
    {
      name: 'Shri Gautam Kumar',
      phnNumber: '01412921415',
      post: 'Cabinet Minister',
      department: [
        'School Education Department',
        'Panchayati Raj Department',
        'Sanskrit Education Department',
      ],
      assembly: 'Ramganj Mandi (SC)',
      img: gautamSMPhoto,
    },
  ],
  'State Minister': [
    {
      name: 'Shri Ota Ram Dewasi',
      phnNumber: '01412921415',
      post: 'Cabinet Minister',
      department: [
        'Medical and Health Department',
        'Medical and Health Services (ESI)',
      ],
      assembly: 'Jhotwara',
      img: otaRamPhoto,
    },
    {
      name: 'Dr. Manju Baghmar',
      phnNumber: '01412921415',
      post: 'Cabinet Minister',
      department: [
        'School Education Department',
        'Panchayati Raj Department',
        'Sanskrit Education Department',
      ],
      assembly: 'Ramganj Mandi (SC)',
      img: manjuPhoto,
    },
  ],
  MLA: [
    {
      name: 'Sh. Bhajan Lal Sharma',
      post: 'Hon ble Chief Minister',
      assembly: 'Sanganer',
      img: bhajanSecondPhoto,
    },
    {
      name: 'Smt Diya Kumari',
      post: 'Hon ble Chief Minister',
      assembly: 'Vidhadhar Nagar',
      img: diyaPhoto,
    },
    {
      name: 'Dr. Premchand Bairwa',
      post: 'Hon ble Chief Minister',
      assembly: ' Dudu (SC)',
      img: premDCMPhoto,
    },
  ],
  'Chief Secretary': [
    {
      name: 'Shri Sudhansh Pant',
      img: chiefSecretaryImg,
      dob: '14 Feb 1967',
      homeTown: 'Lucknow',
      qualification: 'B.TECH.(HONS.)(EEC.)',
    },
  ],
};
