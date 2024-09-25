import { Component, EventEmitter, Output } from '@angular/core';
import { CookieManagementService } from '../../cookie-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private cookieService: CookieManagementService) {
    const cookieLang = this.cookieService.getCookie('lang');
    this.lang = cookieLang ? parseInt(cookieLang, 10) : 1; 
  }
  @Output() contactClick = new EventEmitter<void>();
  lang: number = 1; // Default value
  navOpen: boolean = false; // Track the state of the navigation
  toggleLang() {
    this.lang = this.lang === 1 ? 2 : 1; // Toggle between 1 and 2
    this.cookieService.setCookie('lang', this.lang.toString(), 1);
    window.location.reload();
   
  }
  scrollToFooter() {
    this.contactClick.emit();
  }

  toggleNav() {
    this.navOpen = !this.navOpen; // Toggle the navigation state
  }

  setExampleCookie() {
    this.cookieService.setCookie('exampleCookie', 'Hello, World!', 7); // Set cookie for 7 days
  }

  getExampleCookie() {
    const cookieValue = this.cookieService.getCookie('exampleCookie');
    console.log('Cookie Value:', cookieValue);
  }

  deleteExampleCookie() {
    this.cookieService.deleteCookie('exampleCookie');
    console.log('Cookie deleted');
  }
}
