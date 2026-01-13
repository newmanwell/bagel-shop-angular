import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagelLocation } from '../bagel-location/bagel-location';
import { BagelLocationInterface } from '../bagel-location';
import { Bagel } from '../bagel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BagelLocation],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by bagel">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-bagel-location *ngFor="let bagelLocation of bagelLocationList" [bagelLocation]="bagelLocation"></app-bagel-location>
    </section>
  `,
  styleUrls: ['./home.css'],
})

export class Home {
  bagelLocationList: BagelLocationInterface[] = [];
  bagel: Bagel = inject(Bagel);

  constructor() {
    this.bagelLocationList = this.bagel.getAllBagels();
  }
}
