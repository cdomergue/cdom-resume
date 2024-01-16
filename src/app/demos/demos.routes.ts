import { Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'snake',
    pathMatch: 'full',
  },
  {
    path: 'snake',
    loadComponent: () => import('./snake/snake.component'),
    title: 'Démos - Snake',
  },
];

export default routes;
