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
    title: 'Démos - Snake - Christophe Domergue',
  },
  {
    path: 'ngrx',
    loadComponent: () => import('./ng-rx/ng-rx.component'),
    title: 'Démos - Ng Rx - Christophe Domergue',
  },
];

export default routes;
