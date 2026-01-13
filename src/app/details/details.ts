import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <p>
      details works! {{ bagelLocationId }}
    </p>
  `,
  styles: ``,
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  bagelLocationId = 0;

  constructor() {
    this.bagelLocationId = Number(this.route.snapshot.params["id"]);
  }
}
