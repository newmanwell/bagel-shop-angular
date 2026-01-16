import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Bagel } from '../bagel';
import { BagelLocationInterface } from '../bagel-location';

@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <article>
      <img class="bagel-photo" [src]="bagelLocationInterface?.photo" />
      <section class="bagel-description">
        <h2 class="bagel-heading">{{ bagelLocationInterface?.bagelName }}</h2>
        <p class="bagel-description">{{  bagelLocationInterface?.bagelDescription }}</p>
      </section>
      <section class="bagel-features">
        <h2 class="section-heading">About this bagel</h2>
        <ul>
          <li>Butter: {{ bagelLocationInterface?.butter }}</li>
          <li>Cream Cheese: {{ bagelLocationInterface?.creamCheese }}</li>
          <li>Left in stock: {{ bagelLocationInterface?.availableBagels }}</li>
        </ul>
      </section>
      <section class="order-online">
        <h2 class="section-heading">Order a bagel</h2>
        <button class="primary" type="button">Order Now</button>
      </section>
    </article>
  `,
  styleUrls: ['./details.css'],
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  bagel = inject(Bagel);
  bagelLocationInterface: BagelLocationInterface | undefined;

  constructor() {
    const bagelId = Number(this.route.snapshot.params["id"]);
    this.bagelLocationInterface = this.bagel.getBagelById(bagelId);
  }
}
