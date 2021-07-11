import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { ManageBookingComponent  } from './components/manage-bookings/manage-bookings.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { BookFlightComponent } from './components/book-flight/book-flight.component';
import { CheckoutTicketComponent } from './components/checkout-ticket/checkout-ticket.component';

import { UserComponent } from './user.component';
import { UserHomeComponent } from './components/user-home/user-home.component';




const routes: Routes = [
  
  { path: '', component:UserHomeComponent,children:[
    { path: 'bookingHistory', component: BookingHistoryComponent},
   { path: 'manageBooking', component: ManageBookingComponent},
   { path: 'ticketDetails', component: TicketDetailsComponent},
   { path: 'bookFlight', component: BookFlightComponent},
  { path: 'checkoutTicket', component: CheckoutTicketComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
