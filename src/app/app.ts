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
        <img class="brand-logo" src="/assets/logo.svg" alt="bagel logo" aria-hidden="true" />
        <h1>The Bagel Shop</h1>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Bagel Shop pt 2';
}
