import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { BookingHistoryComponent } from './user/components/booking-history/booking-history.component';
// import { ManageBookingComponent } from './user/components/manage-bookings/manage-bookings.component';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
import {CardModule} from 'primeng/card';
// import { TicketDetailsComponent } from './user/components/ticket-details/ticket-details.component';
import { BookFlightComponent } from './user/components/book-flight/book-flight.component';
import {PanelModule} from 'primeng/panel';
import {RadioButtonModule} from 'primeng/radiobutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
// import { CheckoutTicketComponent } from './user/components/checkout-ticket/checkout-ticket.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
// import { CapitalizePipe } from 'src/nested/pipes/capitalize.pipe';
import { AboutComponent } from './components/about/about.component';
import { FlightsComponent } from './components/flights/flights.component';
import { LoginComponent } from './components/login/login.component';
import {TabViewModule} from 'primeng/tabview';
import {PasswordModule} from 'primeng/password';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import {ChartModule} from 'primeng/chart';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavbarComponent,
    // BookingHistoryComponent,
    // ManageBookingComponent,
    // TicketDetailsComponent,
    // BookFlightComponent,
    HomeComponent,
    // CheckoutTicketComponent,
    // CapitalizePipe,
    AboutComponent,
    FlightsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    FormsModule,
    AppRoutingModule,
    TableModule,
    ChartModule,
    ProgressSpinnerModule,
    ProgressBarModule,
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
  ],
  providers: [MessageService,ConfirmationService,AuthenticationGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
