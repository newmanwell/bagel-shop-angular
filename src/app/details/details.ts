import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Bagel } from '../bagel';
import { BagelLocationInterface } from '../bagel-location';
import { CartItemInterface } from '../cart-item';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

const CART_STORAGE_KEY = 'cart';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
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
          <li>Price: $ {{ bagelLocationInterface?.price }}</li>
        </ul>
      </section>
      <section class="order-online">
        <h2 class="section-heading">Order a bagel</h2>
        <form>
          <!-- <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName">
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">
          <label for="email">Email</label>
          <input id="email" type="text" formControlName="email"> -->
          <button type="button" class="primary" (click)="addToCart()">Add to Cart</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.css'],
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  bagel = inject(Bagel);
  bagelLocationInterface: BagelLocationInterface | undefined;

  // [formGroup]="orderForm"
  // orderForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  // });

  constructor() {
    const bagelId = Number(this.route.snapshot.params["id"]);
    this.bagelLocationInterface = this.bagel.getBagelById(bagelId);
  }

  addToCart() {
    if (!this.bagelLocationInterface) {
      return;
    }

    const cart: CartItemInterface[] = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) ?? '[]');
    const existingItem = cart.find(item => item.id === this.bagelLocationInterface!.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ id: this.bagelLocationInterface.id, quantity: 1 });
    }

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }

  // (submit)="submitOrder()"
  // submitOrder() {
  //   this.bagel.submitOrder(
  //     this.orderForm.value.firstName ?? '',
  //     this.orderForm.value.lastName ?? '',
  //     this.orderForm.value.email ?? '',
  //     this.bagelLocationInterface?.price || 0
  //   )}
}
