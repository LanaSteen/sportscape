import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CookieManagementService } from '../../cookie-service.service';
import { LanguageService } from '../../language-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  constructor(private cookieService: CookieManagementService, 
    private languageService: LanguageService) {
    const cookieLang = this.cookieService.getCookie('lang');
    this.lang = cookieLang ? parseInt(cookieLang, 10) : 1; 
  }


  lang: number = 1;



  ngOnInit() {
    this.languageService.lang$.subscribe(lang => {
      this.lang = lang;
    });
  }



  @Output() contactClick = new EventEmitter<void>();

  navOpen: boolean = false; 
  isLiBarsOpen = false;

  toggleLiBars() {
    this.isLiBarsOpen = !this.isLiBarsOpen; 

  }
  toggleLang() {
    this.lang = this.lang === 1 ? 2 : 1; 
    this.cookieService.setCookie('lang', this.lang.toString(), 1);
    window.location.reload();
   
  }
  scrollToFooter() {
    this.contactClick.emit();
  }

  toggleNav() {
    this.navOpen = !this.navOpen; 
  }

  setExampleCookie() {
    this.cookieService.setCookie('exampleCookie', 'Hello, World!', 7); 
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
