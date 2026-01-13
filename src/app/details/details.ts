import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Bagel } from '../bagel';
import { BagelLocationInterface } from '../bagel-location';

@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <p>
      details works! {{ bagelLocationInterface?.id }}
    </p>
  `,
  styles: ``,
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  bagel = inject(Bagel);
  bagelLocationInterface: BagelLocationInterface | undefined;

  constructor() {
    const bagelId = Number(this.route.snapshot.params["id"]);
    this.bagelLocationInterface = this.bagel.getBagelById(bagelId);
  }
}
