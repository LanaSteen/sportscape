import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'Sportscape';
  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(event => {
      // Existing logic to handle other navigation events
    });
  }

  scrollToFooter() {
    const element = document.getElementById('foot');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // ngOnInit() {
  //   this.router.events.pipe(
  //     filter((event): event is NavigationEnd => event instanceof NavigationEnd) // Type guard
  //   ).subscribe(event => {
  //     // Get the fragment from the URL
  //     const fragment = event.url.split('#')[1]; // Extract the fragment

  //     // Debugging log
  //     console.log('Fragment:', fragment);

  //     // Only scroll if the fragment exists and equals 'foot'
  //     if (fragment === 'foot') {
  //       const element = document.getElementById(fragment);
  //       if (element) {
  //         element.scrollIntoView({ behavior: 'smooth' });
  //       }
  //     }
  //   });
  // }
}
