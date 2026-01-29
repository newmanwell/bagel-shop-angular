import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section>
      <a [routerLink]="['/allbagels']">Our Bagels</a>
    </section>
  `,
  styleUrls: ['./home.css'],
})

export class Home {
  
}
