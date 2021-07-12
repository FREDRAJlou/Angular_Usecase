import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BookingHistoryComponent } from './user/components/booking-history/booking-history.component';
// import { ManageBookingComponent  } from './user/components/manage-bookings/manage-bookings.component';
// import { TicketDetailsComponent } from './user/components/ticket-details/ticket-details.component';
// import { BookFlightComponent } from './user/components/book-flight/book-flight.component';
// import { CheckoutTicketComponent } from './user/components/checkout-ticket/checkout-ticket.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FlightsComponent } from './components/flights/flights.component';
import {LoginComponent } from './components/login/login.component';
// import { ManageBookingComponent } from './user/components/manage-bookings/manage-bookings.component';
import { UserComponent } from './user/user.component';
import { UserHomeComponent } from './user/components/user-home/user-home.component';


const routes: Routes = [
  // { path: 'bookingHistory', component: BookingHistoryComponent},
  //  { path: 'manageBooking', component: ManageBookingComponent},
  //  { path: 'ticketDetails', component: TicketDetailsComponent},
  //  { path: 'bookFlight', component: BookFlightComponent},
  // { path: 'checkoutTicket', component: CheckoutTicketComponent},
   { path: 'home', component: HomeComponent},
   { path: 'about', component: AboutComponent},
    { path: 'flights', component: FlightsComponent},
    { path: 'logout', component: HomeComponent},
    { path: 'login', component: LoginComponent},     
    { path: 'user',  loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    { path: 'admin',  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      // {path:'',component:HomeComponent,children:[
      //   { path: 'user',  loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      //   { path: 'admin',  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },]},
  //  
  
    //  {path:'**', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
