import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Home],
  template: ` 
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="bagel logo" aria-hidden="true" />
        <h1>The Bagel Shop</h1>
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Bagel Shop pt 2';
}
