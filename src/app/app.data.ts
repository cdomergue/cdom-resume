import { ProductType } from './shared/store/product/models/product-type';

export const AppTranslationFr = {
  name: 'Christophe Domergue',
  intro: 'Développeur d’origine Full-Stack avec une grande appétence pour le développement web, spécialisé en Angular.',
  title: 'Développeur Front-End',
  experiences: 'Mes expériences',
  diplomas: 'Études',
  demos: 'Démos',
  snake: 'Snake avec Signals',
  ngRx: 'Ng Rx',
  products: {
    [ProductType.VEHICLE]: 'Véhicule',
    [ProductType.BUILDING]: 'Immeuble',
    [ProductType.AIRPLANE]: 'Avion',
    type: 'Type :',
    price: 'Prix :',
    description: 'Description :',
  },
};

export const AppTranslationEn = {
  name: 'Christophe Domergue',
  intro: 'Full-Stack developer with a strong interest in web development, specializing in Angular.',
  title: 'Front-End Developer',
  experiences: 'Work Experiences',
  diplomas: 'Education',
  demos: 'Demos',
  snake: 'Snake with Signals',
  ngRx: 'Ng Rx',
  products: {
    [ProductType.VEHICLE]: 'Vehicle',
    [ProductType.BUILDING]: 'Building',
    [ProductType.AIRPLANE]: 'Airplane',
    type: 'Type:',
    price: 'Price:',
    description: 'Description:',
  },
};
