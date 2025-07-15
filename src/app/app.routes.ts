import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Tickets } from './tickets/tickets';
import { Store } from './store/store';
import { News } from './news/news';
import { Matches } from './matches/matches';
import { Championships } from './championships/championships';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'tickets', component: Tickets },
  { path: 'store', component: Store },
  { path: 'news', component: News },
  { path: 'matches', component: Matches },
  { path: 'championships', component: Championships }
];

