import { ProductType } from './shared/store/product/models/product-type';

export const AppTranslationFr = {
  name: 'Christophe Domergue',
  intro: `Je suis un développeur front-end spécialisé en Angular avec une expérience full-stack.

J'ai travaillé sur des projets complexes dans les secteurs bancaire et de la télématique embarquée, menant des refontes UI/UX et des migrations technologiques importantes.
J'ai également pris des responsabilités de co-lead technique, garantissant la qualité et la performance des projets.

Passionné par le développement web, je m'efforce d'offrir des solutions modernes et efficaces pour répondre aux besoins de mes clients.
`,
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
  intro: `I am a front-end developer specialized in Angular with full-stack experience.

I have worked on complex projects in the banking and embedded telematics sectors, leading UI/UX redesigns and significant technological migrations.
I have also taken on co-lead technical responsibilities, ensuring the quality and performance of the projects.

Passionate about web development, I strive to provide modern and efficient solutions to meet my clients' needs.
`,
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
