import { Education } from './education.component';

export const EducationFr: Education[] = [
  {
    id: '1',
    duration: '3 ans',
    start: 'Septembre 2014',
    end: 'Juin 2017',
    title: 'Ingénieur',
    logoUrl: 'assets/logo-esiea.png',
    schoolName: 'ESIEA Paris',
    body: [
      {
        text: "École d'ingénieurs en alternance",
        url: 'diplome.pdf',
      },
    ],
  },
  {
    id: '2',
    duration: '2 ans',
    start: 'Septembre 2012',
    end: 'Juin 2014',
    title: 'DUT Informatique',
    logoUrl: 'assets/iut.png',
    schoolName: 'IUT Paris Descartes',
    body: [
      {
        text: 'DUT Informatique, en alternance durant la deuxième année',
      },
    ],
  },
];

export const EducationEn: Education[] = [
  {
    id: '1',
    duration: '3 years',
    start: 'September 2014',
    end: 'June 2017',
    title: 'Engineering Degree',
    logoUrl: 'assets/logo-esiea.png',
    schoolName: 'ESIEA Paris',
    body: [
      {
        text: 'Engineering school with a work-study program',
        url: 'assets/diplome.pdf',
      },
    ],
  },
  {
    id: '2',
    duration: '2 years',
    start: 'September 2012',
    end: 'June 2014',
    title: 'Computer Science DUT',
    logoUrl: 'assets/iut.png',
    schoolName: 'IUT Paris Descartes',
    body: [
      {
        text: 'Computer Science DUT with a work-study program during the second year',
      },
    ],
  },
];
