import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {
  images = [
    '../../assets/DSC09127.JPG',
    '../../assets/DSC09134.JPG',
    '../../assets/DSC09135.JPG',
    '../../assets/DSC09140.JPG',
    '../../assets/DSC09142.JPG',
    '../../assets/DSC09144.JPG'
  ];
  currentIndex = 0;

  constructor() {
    this.startSlideshow();
  }

  startSlideshow() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Change image every 3 seconds
  }
}
