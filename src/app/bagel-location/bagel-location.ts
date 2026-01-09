import { Component, Input } from '@angular/core';
import { BagelLocationInterface } from '../bagel-location';

@Component({
  selector: 'app-bagel-location',
  imports: [],
  template: `
    <section class="bagel">
      <img class="bagel-photo" [src]="BagelLocationInterface.photo" alt="photo of {{ BagelLocationInterface.bagelName}}" />
      <h2 class="bagel-heading">{{ BagelLocationInterface.bagelName }}</h2>
      <p class="bagel-location">{{ BagelLocationInterface.bagelDescription }}</p>
    </section>
  `,
  styleUrls: [`./bagel-location.css`],
})

export class BagelLocation {
  @Input() BagelLocationInterface!: BagelLocationInterface;
}
