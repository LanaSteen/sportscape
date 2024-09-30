import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private langSubject = new BehaviorSubject<number>(1); // Default language
  lang$ = this.langSubject.asObservable();

  constructor() {
    const savedLang = this.getLanguageFromCookie();
    if (savedLang) {
      this.langSubject.next(savedLang);
    }
  }

  toggleLang() {
    const newLang = this.langSubject.value === 1 ? 2 : 1;
    this.langSubject.next(newLang);
    this.setCookie('lang', newLang.toString(), 1);
  }

  private setCookie(name: string, value: string, days: number) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }

  private getLanguageFromCookie(): number | null {
    const match = document.cookie.match(new RegExp('(^| )lang=([^;]+)'));
    return match ? parseInt(decodeURIComponent(match[2]), 10) : null;
  }
}
