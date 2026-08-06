import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bagel } from '../bagel';
import { BagelLocationInterface } from '../bagel-location';
import { CartItemInterface } from '../cart-item';

const CART_STORAGE_KEY = 'cart';

interface CartLineItem {
  bagelLocation: BagelLocationInterface;
  quantity: number;
  subtotal: number;
}

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="cart">
      <article class="cart-line" *ngFor="let line of cartLineItems">
        <img class="bagel-thumbnail" [src]="line.bagelLocation.photo" alt="photo of {{ line.bagelLocation.bagelName }}" />
        <span class="bagel-name">{{ line.bagelLocation.bagelName }}</span>
        <span class="bagel-quantity">Qty: {{ line.quantity }}</span>
        <span class="bagel-subtotal">$ {{ line.subtotal.toFixed(2) }}</span>
      </article>
      <p class="cart-empty" *ngIf="!cartLineItems.length">Your cart is empty.</p>
      <p class="cart-total" *ngIf="cartLineItems.length">Total: $ {{ total.toFixed(2) }}</p>
    </section>
  `,
  styleUrls: ['./shopping-cart.css'],
})
export class ShoppingCart {
  bagel = inject(Bagel);
  cartLineItems: CartLineItem[] = [];
  total = 0;

  constructor() {
    const cart: CartItemInterface[] = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) ?? '[]');

    this.cartLineItems = cart
      .map(item => {
        const bagelLocation = this.bagel.getBagelById(item.id);
        return bagelLocation
          ? { bagelLocation, quantity: item.quantity, subtotal: bagelLocation.price * item.quantity }
          : undefined;
      })
      .filter((line): line is CartLineItem => line !== undefined);

    this.total = this.cartLineItems.reduce((sum, line) => sum + line.subtotal, 0);
  }
}
