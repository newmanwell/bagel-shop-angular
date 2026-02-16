import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagelLocation } from '../bagel-location/bagel-location';
import { BagelLocationInterface } from '../bagel-location';
import { Bagel } from '../bagel';

@Component({
  selector: 'app-all-bagels',
  standalone: true,
  imports: [CommonModule, BagelLocation],
  template: `
    <section>
      <form (submit)="$event.preventDefault()">
        <input type="text" placeholder="Filter by bagel" #filter (input)="filterResults(null, filter.value)">
        <button class="primary" type="button" (click)="filterResults(null, filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-bagel-location *ngFor="let bagelLocation of filteredBagelList" [bagelLocation]="bagelLocation"></app-bagel-location>
    </section>
  `,
  styleUrls: ['./all-bagels.css'],
})

export class AllBagels {
  bagelLocationList: BagelLocationInterface[] = [];
  bagel: Bagel = inject(Bagel);
  filteredBagelList: BagelLocationInterface[] = [];

  constructor() {
    this.bagelLocationList = this.bagel.getAllBagels();
    this.filteredBagelList = this.bagelLocationList;
  }

  filterResults(event: Event | null, text: string) {
    event?.preventDefault();
    if (!text) this.filteredBagelList = this.bagelLocationList;

    this.filteredBagelList = this.bagelLocationList.filter(
      bagelLocationList => bagelLocationList?.bagelName.toLowerCase().includes(text.toLowerCase())
    );
  }
}
