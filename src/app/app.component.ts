import { Component } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';
  // public carouselTileConfig: NguCarouselConfig = {
  //   grid: {xs: 2, sm: 3, md: 3, lg: 5, xl:5, all: 0},
  //     slide: 2,
  //     speed: 400,
  //     animation: 'lazy',
  //     point: {
  //       visible: true
  //     },
  //     load: 2,
  //     touch: true,
  //     easing: 'ease'
  // };
}
