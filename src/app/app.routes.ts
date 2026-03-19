import { Routes } from '@angular/router';
import { Tasklist } from './components/tasklist/tasklist';

export const routes: Routes = [
  { path: '', component: Tasklist },
  { path: 'tasks', component: Tasklist },
  { path: '**', redirectTo: '' }
];
