import { ProductType } from './shared/store/product/models/product-type';

export const AppTranslationFr = {
  name: 'Christophe Domergue',
  intro: 'Développeur d’origine Full-Stack avec une grande appétence pour le développement web, spécialisé en Angular.',
  title: 'Développeur Front-End',
  experiences: 'Mes expériences',
  education: 'Études',
  demos: 'Démos',
  snake: {
    title: 'Snake avec Signals',
    info: 'Snake utilisant Angular Signals. Utilisez ZQSD ou WASD pour vous déplacer. D pour démarrer',
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
  menu: {
    open: 'Ouvrir Menu',
    close: 'Fermer Menu',
  },
  downloadDiploma: 'Télécharger le diplôme',
};

export const AppTranslationEn = {
  name: 'Christophe Domergue',
  intro: 'Full-Stack developer with a strong interest in web development, specializing in Angular.',
  title: 'Front-End Developer',
  experiences: 'Work Experiences',
  education: 'Education',
  demos: 'Demos',
  snake: {
    title: 'Snake with Signals',
    info: 'Snake using Angular Signals. Use WASD or ZQSD to move. D to start',
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
  menu: {
    open: 'Open Menu',
    close: 'Close Menu',
  },
  downloadDiploma: 'Download diploma',
};
