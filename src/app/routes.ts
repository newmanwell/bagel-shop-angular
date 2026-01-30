import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Details } from './details/details';
import { AllBagels } from './all-bagels/all-bagels';

const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page'
  },
  {
    path: 'allbagels',
    component: AllBagels,
    title: 'Our Bagels'
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Details Page'
  }
];

export default routeConfig;