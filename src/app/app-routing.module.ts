import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { ManageBookingComponent  } from './components/manage-bookings/manage-bookings.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { BookFlightComponent } from './components/book-flight/book-flight.component';
import { CheckoutTicketComponent } from './components/checkout-ticket/checkout-ticket.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FlightsComponent } from './components/flights/flights.component';
import {LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'bookingHistory', component: BookingHistoryComponent},
   { path: 'manageBooking', component: ManageBookingComponent},
   { path: 'ticketDetails', component: TicketDetailsComponent},
   { path: 'bookFlight', component: BookFlightComponent},
  { path: 'checkoutTicket', component: CheckoutTicketComponent},
   { path: 'home', component: HomeComponent},
   { path: 'about', component: AboutComponent},
    { path: 'flights', component: FlightsComponent},
    { path: 'logout', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    // { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    {path:'**', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
