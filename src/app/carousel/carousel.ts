import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../service';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  products: any[] = [];

  constructor(private service: Service) { }

  ngOnInit() {
    // Custom banner images
    this.products = [
      {
        thumbnail: 'https://media.gucci.com/dynamic/b3c8/8jCh7rbyPgIW2HN6hKmpbJugMKkSuBEg_fP1BJ7SJ_2o6W9n1lPjKZS6FFSm32BmWnuHilZPqre3x+DskN2e_HIZCQNioiSILfthP8IvcKkwNguPXz5_4NHL15hk1U4BNc+tUEyGNQuIFeyHiM8W0DP9qt2xe9OYmmF0_Rg1titLnjBWhkEjd3xakn2PwLX6btiV03zF86EknrHZEWvnEyn_zl+fJ6PCpD9qfK7Yyqnq8ZBy974jo1_THpPJ8dbJnVRfS669iSE9TBfBD2goWQ==/FLORA_DIGITAL_STILLLIFE2_1638x1638_22.jpg',
        title: 'Discover Luxury Beauty',
        description: 'Explore our latest collection of premium fragrances and cosmetics.'
      },
      {
        thumbnail: 'https://png.pngtree.com/background/20230414/original/pngtree-makeup-skin-care-products-cosmetics-beauty-photography-advertising-background-picture-image_2424108.jpg',
        title: 'Revitalize Your Skin',
        description: 'Find the best skincare products for a glowing complexion.'
      },
      {
        thumbnail: 'https://techmerpm-devsite.azurewebsites.net/wp-content/uploads/2021/11/Consumer-Electronics-scaled.jpeg',
        title: 'Latest Electronics',
        description: 'Upgrade your tech with our wide range of consumer electronics.'
      }
    ];
  }
}
