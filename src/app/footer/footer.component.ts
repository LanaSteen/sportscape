import { Component } from '@angular/core';
import { CookieManagementService } from '../cookie-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private cookieService: CookieManagementService) {
    const cookieLang = this.cookieService.getCookie('lang');
    this.lang = cookieLang ? parseInt(cookieLang, 10) : 1; 
  }
  lang: number = 1; // Default value
}
