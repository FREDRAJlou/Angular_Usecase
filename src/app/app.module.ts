import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { ManageBookingComponent } from './components/manage-bookings/manage-bookings.component';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
import {CardModule} from 'primeng/card';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { BookFlightComponent } from './components/book-flight/book-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookingHistoryComponent,
    ManageBookingComponent,
    TicketDetailsComponent,
    BookFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    MenubarModule,
    ButtonModule,
    SplitterModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
