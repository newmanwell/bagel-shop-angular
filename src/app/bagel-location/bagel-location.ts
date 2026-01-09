import { Component } from '@angular/core';

@Component({
  selector: 'app-bagel-location',
  imports: [],
  template: `
    <section class="bagel">
      <img class="bagel-photo" />
      <h2 class="bagel-heading"></h2>
      <p class="bagel-location"></p>
    </section>
  `,
  styleUrls: [`./bagel-location.css`],
})
export class BagelLocation {

}
