import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'experiences', loadComponent: () => import('./experiences/experiences.component') },
];
