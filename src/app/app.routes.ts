import { Routes } from '@angular/router';
import {UserComponent} from './pages/user/user.component';
import {ListComponent} from './pages/list/list.component';

export const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'user', component: UserComponent },
];
