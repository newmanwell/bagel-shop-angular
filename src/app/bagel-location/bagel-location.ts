import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagelLocationInterface } from '../bagel-location';

@Component({
  selector: 'app-bagel-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bagel">
      <img class="bagel-photo" [src]="bagelLocation.photo" alt="photo of {{ bagelLocation.bagelName }}" />
      <h2 class="bagel-heading">{{ bagelLocation.bagelName }}</h2>
      <p class="bagel-location">{{ bagelLocation.bagelDescription }}</p>
    </section>
  `,
  styleUrls: [`./bagel-location.css`],
})

export class BagelLocation {
  @Input() bagelLocation!: BagelLocationInterface;
}
