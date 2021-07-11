import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserRoutingModule } from './user-routing.module';
import { UserNavbarComponent } from './components/usernavbar/usernavbar.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { ManageBookingComponent } from './components/manage-bookings/manage-bookings.component';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
// import { CapitalizePipe } from 'src/nested/pipes/capitalize.pipe';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
import {CardModule} from 'primeng/card';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { BookFlightComponent } from './components/book-flight/book-flight.component';
import {PanelModule} from 'primeng/panel';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {HttpClientModule} from '@angular/common/http'
import { CheckoutTicketComponent } from './components/checkout-ticket/checkout-ticket.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {TabViewModule} from 'primeng/tabview';
import {PasswordModule} from 'primeng/password';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserHomeComponent } from './components/user-home/user-home.component';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    UserNavbarComponent,
    BookingHistoryComponent,
    ManageBookingComponent,
    TicketDetailsComponent,
    BookFlightComponent,
    CheckoutTicketComponent,
    UserHomeComponent
  ],
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    HttpClientModule ,
    FormsModule,
   UserRoutingModule,
    TableModule,
    MenubarModule,
    ButtonModule,
    SplitterModule,
    CardModule,
    PanelModule,
    RadioButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
TabViewModule,
MessageModule,
PasswordModule,
MessagesModule,
ToastModule,
ConfirmDialogModule,
CommonModule,
RouterModule
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: []
})
export class UserModule { }
