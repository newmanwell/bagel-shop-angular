import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Bagel } from '../bagel';
import { BagelLocationInterface } from '../bagel-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
        <form [formGroup]="orderForm" (submit)="submitOrder()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName">
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">
          <label for="email">Email</label>
          <input id="email" type="text" formControlName="email">
          <button type="submit" class="primary">Order Now!</button>
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

  orderForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const bagelId = Number(this.route.snapshot.params["id"]);
    this.bagelLocationInterface = this.bagel.getBagelById(bagelId);
  }

  submitOrder() {
    this.bagel.submitOrder(
      this.orderForm.value.firstName ?? '',
      this.orderForm.value.lastName ?? '',
      this.orderForm.value.email ?? '',
      this.bagelLocationInterface?.price || 0
    )}
}
