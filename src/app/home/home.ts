import { Component } from '@angular/core';
import { BagelLocation } from '../bagel-location/bagel-location';

@Component({
  selector: 'app-home',
  imports: [BagelLocation],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by bagel">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-bagel-location></app-bagel-location>
    </section>
  `,
  styles: ``,
})
export class Home {

}
