import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bagel } from '../bagel';
import { BagelLocationInterface } from '../bagel-location';
import { CartItemInterface } from '../cart-item';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

const CART_STORAGE_KEY = 'cart';

interface CartLineItem {
  bagelLocation: BagelLocationInterface;
  quantity: number;
  subtotal: number;
}

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="cart">
      <article class="cart-line" *ngFor="let line of cartLineItems">
        <img class="bagel-thumbnail" [src]="line.bagelLocation.photo" alt="photo of {{ line.bagelLocation.bagelName }}" />
        <span class="bagel-name">{{ line.bagelLocation.bagelName }}</span>
        <span>
          <button class="quantityButton" (click)="incrementQuantity(line)">+</button>
          <button class="quantityButton" (click)="decrementQuantity(line)" [disabled]="line.quantity === 0">-</button>
        </span>
        <span class="bagel-quantity">Qty: {{ line.quantity }}</span>
        <span class="bagel-subtotal">$ {{ line.subtotal.toFixed(2) }}</span>
      </article>
      <p class="cart-empty" *ngIf="!cartLineItems.length">Your cart is empty.</p>
      <p class="cart-total" *ngIf="cartLineItems.length">Total: $ {{ total.toFixed(2) }}</p>
    </section>
    <section class="order-online">
      <form [formGroup]="orderForm" (ngSubmit)="submitOrder()">
        <h2 class="section-heading">Submit Order</h2>
        <label for="first-name" >First Name</label>
        <input id="first-name" type="text" formControlName="firstName" required>
        <label for="last-name" >Last Name</label>
        <input id="last-name" type="text" formControlName="lastName" required>
        <label for="email">Email</label>
        <input id="email" type="text" formControlName="email" required>
        <button type="submit" class="primary" [disabled]="orderForm.invalid || total === 0">Submit Order</button>
      </form>
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

updateLocalStorage() {
  const cart = this.cartLineItems.map(l => ({ id: l.bagelLocation.id, quantity: l.quantity }));
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

  incrementQuantity(line: CartLineItem) {
    line.quantity += 1;
    line.subtotal = line.bagelLocation.price * line.quantity;
    this.total = this.cartLineItems.reduce((sum, l) => sum + l.subtotal, 0);
    this.updateLocalStorage();
  }

  decrementQuantity(line: CartLineItem) {
    if (line.quantity === 0) {
      return;
    }

    line.quantity -= 1;
    line.subtotal = line.bagelLocation.price * line.quantity;
    this.total = this.cartLineItems.reduce((sum, l) => sum + l.subtotal, 0);
    this.updateLocalStorage();
  }

  orderForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  submitOrder() {
    this.bagel.submitOrder(
      this.orderForm.value.firstName ?? '',
      this.orderForm.value.lastName ?? '',
      this.orderForm.value.email ?? '',
      this.total || 0
    );

    localStorage.removeItem(CART_STORAGE_KEY);
    this.cartLineItems = [];
    this.total = 0;
    this.orderForm.reset();
  }
}
