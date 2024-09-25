import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieManagementService {

  constructor(private cookieService: CookieService) { }

  // Set a cookie
  setCookie(name: string, value: string, days?: number) {
    if (days) {
      this.cookieService.set(name, value, days);
    } else {
      this.cookieService.set(name, value);
    }
  }

  // Get a cookie
  getCookie(name: string): string {
    return this.cookieService.get(name);
  }

  // Delete a cookie
  deleteCookie(name: string) {
    this.cookieService.delete(name);
  }
}