import { Injectable } from '@angular/core';
import { BagelLocationInterface } from './bagel-location';

@Injectable({
  providedIn: 'root',
})
export class Bagel {
  submitOrder(firstName: string, lastName: string, email: string) {
    alert(`Thank you for your order ${firstName} ${lastName}! A confirmation has been sent to ${email}`);
  }

  protected bagelLocationList: BagelLocationInterface [] = [
    {
      id: 0,
      bagelName: 'Plain',
      photo: '/assets/bagel_pictures/plain.webp',
      bagelDescription: 'A plain bagel, our most special',
      price: 200,
      availableBagels: 22,
      creamCheese: true,
      butter: true
    },
    {
      id: 1,
      bagelName: 'Everything',
      photo: '/assets/bagel_pictures/everything.jpg',
      bagelDescription: 'Everything on the kitchen counter for this one',
      price: 250,
      availableBagels: 14,
      creamCheese: true,
      butter: true
    },
    {
      id: 2,
      bagelName: 'Rainbow',
      photo: '/assets/bagel_pictures/rainbow.jpg',
      bagelDescription: 'Taste the rainbow! Its just a plain bagel with color',
      price: 300,
      availableBagels: 6,
      creamCheese: true,
      butter: true
    },
    {
      id: 3,
      bagelName: 'Salt',
      photo: '/assets/bagel_pictures/salt.jpg',
      bagelDescription: 'Salty like the beach',
      price: 300,
      availableBagels: 9,
      creamCheese: true,
      butter: false
    },
    {
      id: 4,
      bagelName: 'Egg',
      photo: '/assets/bagel_pictures/egg.webp',
      bagelDescription: 'Are eggs cheap again?',
      price: 400,
      availableBagels: 5,
      creamCheese: false,
      butter: true
    },
    {
      id: 5,
      bagelName: 'Pumpernickel',
      photo: '/assets/bagel_pictures/pumpernickel.webp',
      bagelDescription: 'Not a chocolate bagel',
      price: 300,
      availableBagels: 2,
      creamCheese: false,
      butter: true
    },
    {
      id: 6,
      bagelName: 'Hot Cheetos',
      photo: '/assets/bagel_pictures/flaming-hot-bagel.jpg',
      bagelDescription: 'Oh she spicy',
      price: 500,
      availableBagels: 4,
      creamCheese: true,
      butter: false
    },
  ];

  getAllBagels(): BagelLocationInterface[] {
    return this.bagelLocationList;
  };

  getBagelById(id: Number): BagelLocationInterface | undefined {
    return this.bagelLocationList.find(bagelLocationList => bagelLocationList.id === id);
  }
}
