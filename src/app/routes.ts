import { Routes } from '@angular/router';
import { Home } from './home/home';

const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page'
  }
];

export default routeConfig;