import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../service';
import { Carousel } from '../carousel/carousel';
import { Navbar } from '../navbar/navbar';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, Carousel, Navbar],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: any[] = [];
  categoryGridProducts: any[] = [];
  featuredProduct1: any;
  featuredProduct2: any;

  constructor(private service: Service) { }

  ngOnInit() {
    this.service.getProducts().subscribe((data: any) => {
      if (data && data.products) {
        this.products = data.products;
        this.categoryGridProducts = this.products.slice(0, 4);
        this.featuredProduct1 = this.products[4];
        this.featuredProduct2 = this.products[5];
      }
    });
  }
}
