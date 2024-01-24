import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'experiences',
    loadComponent: () => import('./experiences/experiences.component'),
    title: 'Expériences - Christophe Domergue',
  },
  {
    path: 'education',
    loadComponent: () => import('./education/education.component'),
    title: 'Études - Christophe Domergue',
  },
  {
    path: 'demos',
    loadComponent: () => import('./demos/demos.component'),
    loadChildren: () => import('./demos/demos.routes'),
  },
];
