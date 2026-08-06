import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from "./home/home";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Home, RouterModule],
  template: ` 
    <main>
      <header class="brand-name">
        <div class="heading-logo">
          <img class="brand-logo" src="/assets/logo.svg" alt="bagel logo" aria-hidden="true" />
          <h1>The Bagel Shop</h1>
        </div>
        <a [routerLink]="['/']"><img class="home-link" src="/assets/bagel-home.jpeg" alt="home page" /></a>
        <a class="cart-link" [routerLink]="['/cart']">Cart</a>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
      <footer>
        <a href="https://www.shaunnewman.dev" target="_blank" >Developed By: &copy; Shaun Newman <span id="year">{{ currentYear }}</span></a> 
      </footer>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Bagel Shop pt 2';

  currentYear = new Date().getFullYear();
}
