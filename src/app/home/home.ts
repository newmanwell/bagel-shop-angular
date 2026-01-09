import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagelLocation } from '../bagel-location/bagel-location';
import { BagelLocationInterface } from '../bagel-location';

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
  bagelLocationList: BagelLocationInterface[] = [
    {
      id: 0,
      bagelName: 'Plain',
      photo: 'https://images.squarespace-cdn.com/content/v1/5f0f608ea6738737b62790c1/1595773894105-58D723XLC7M6SGMCS5ML/Studio+Session-024.jpg',
      bagelDescription: 'A plain bagel, nothing special',
      availableBagels: 22,
      creamCheese: true,
      butter: true
    },
    {
      id: 1,
      bagelName: 'Everything',
      photo: 'https://chefsavvy.com/wp-content/uploads/homemade-everything-bagels1.jpg',
      bagelDescription: 'Everything on the kitchen counter for this one',
      availableBagels: 14,
      creamCheese: true,
      butter: true
    },
    {
      id: 2,
      bagelName: 'Rainbow',
      photo: 'https://www.tastingtable.com/img/gallery/rainbow-bagel-secrets-viral-food-unicorn-trend/image-import.jpg',
      bagelDescription: 'Taste the rainbow!, its just a plain bagel with color',
      availableBagels: 6,
      creamCheese: true,
      butter: true
    },
    {
      id: 3,
      bagelName: 'Salt',
      photo: 'https://www.frontrangefed.com/wp-content/uploads/2023/07/Salt-Bages-Featured-480x270.jpg',
      bagelDescription: 'Salty like the beach',
      availableBagels: 9,
      creamCheese: true,
      butter: false
    },
    {
      id: 4,
      bagelName: 'Egg',
      photo: 'https://static1.squarespace.com/static/5eac4cadbad0a7612d8c693a/t/60329318ce4285406cf12f3c/1613927204984/IMG_0225+2.jpg?format=1500w',
      bagelDescription: 'Are egges cheap again?',
      availableBagels: 5,
      creamCheese: false,
      butter: true
    },
    {
      id: 5,
      bagelName: 'Pumpernickel',
      photo: 'https://boichikbagels.com/cdn/shop/products/pump.jpg?v=1603290529',
      bagelDescription: 'Not a chocolate bagel',
      availableBagels: 2,
      creamCheese: false,
      butter: true
    },
    {
      id: 6,
      bagelName: 'Hot Cheetos',
      photo: 'https://assets.westchestermagazine.com/wp-content/uploads/2023/10/flaming-hot-bagel.jpg',
      bagelDescription: 'Oh she spicy',
      availableBagels: 4,
      creamCheese: true,
      butter: false
    },
  ];
}
