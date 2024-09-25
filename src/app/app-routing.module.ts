import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
