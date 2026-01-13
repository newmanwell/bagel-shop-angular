import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <p>
      details works! {{ bagelId }}
    </p>
  `,
  styles: ``,
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  bagelId = 0;

  constructor() {
    this.bagelId = Number(this.route.snapshot.params["id"]);
  }
}
