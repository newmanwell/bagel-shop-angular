import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Details } from './details/details';
import { AllBagels } from './all-bagels/all-bagels';
import { ShoppingCart } from './shopping-cart/shopping-cart';

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
  },
  {
    path: 'cart',
    component: ShoppingCart,
    title: 'Shopping Cart'
  }
];

export default routeConfig;