import { Component, HostListener } from '@angular/core';
import { CookieManagementService } from '../../cookie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private cookieService: CookieManagementService) {
    const cookieLang = this.cookieService.getCookie('lang');
    this.lang = cookieLang ? parseInt(cookieLang, 10) : 1; 
  }
  lang: number = 1; // Default value
  translateY: number = 0;

  // Listen for scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const speed = 0.2; // Adjust this value for slower/faster scrolling
    this.translateY = -scrollPosition * speed;
  }
}
