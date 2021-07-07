import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { ManageBookingComponent  } from './components/manage-bookings/manage-bookings.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';

const routes: Routes = [
  { path: 'bookingHistory', component: BookingHistoryComponent},
   { path: 'manageBooking', component: ManageBookingComponent},
   { path: 'ticketDetails', component: TicketDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
