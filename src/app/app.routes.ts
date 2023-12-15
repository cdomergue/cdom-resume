import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'experiences',
    loadComponent: () => import('./experiences/experiences.component'),
    title: 'Expériences - Christophe Domergue',
  },
  { path: 'demos', loadComponent: () => import('./demos/demos.component'), title: 'Démos - Christophe Domergue' },
];
