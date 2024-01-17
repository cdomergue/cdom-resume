import { ProductType } from './shared/store/product/models/product-type';

export const AppTranslationFr = {
  name: 'Christophe Domergue',
  intro: 'Développeur d’origine Full-Stack avec une grande appétence pour le développement web, spécialisé en Angular.',
  title: 'Développeur Front-End',
  experiences: 'Mes expériences',
  diplomas: 'Études',
  demos: 'Démos',
  snake: {
    title: 'Snake avec Signals',
    info: 'Snake utilisant Angular Signals. Utilisez ZQSD pour vous déplacer. D pour démarrer',
    stopMusic: 'Stop Musique et Animations',
  },
  ngRx: 'Ng Rx',
  products: {
    [ProductType.VEHICLE]: 'Véhicule',
    [ProductType.BUILDING]: 'Immeuble',
    [ProductType.AIRPLANE]: 'Avion',
    type: 'Type ',
    price: 'Prix ',
    priceRequired: 'Le prix est obligatoire',
    description: 'Description ',
    descriptionRequired: 'La description est obligatoire',
    name: 'Nom ',
    nameRequired: 'Le nom est obligatoire',
  },
};

export const AppTranslationEn = {
  name: 'Christophe Domergue',
  intro: 'Full-Stack developer with a strong interest in web development, specializing in Angular.',
  title: 'Front-End Developer',
  experiences: 'Work Experiences',
  diplomas: 'Education',
  demos: 'Demos',
  snake: {
    title: 'Snake with Signals',
    info: 'Snake using Angular Signals. Use ZQSD to move. D to start',
    stopMusic: 'Stop Music and Animations',
  },
  ngRx: 'Ng Rx',
  products: {
    [ProductType.VEHICLE]: 'Vehicle',
    [ProductType.BUILDING]: 'Building',
    [ProductType.AIRPLANE]: 'Airplane',
    type: 'Type',
    price: 'Price',
    priceRequired: 'Price is required',
    description: 'Description',
    descriptionRequired: 'Description is required',
    name: 'Name',
    nameRequired: 'Name is required',
  },
};
