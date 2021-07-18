import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddAirlinesComponent } from './components/add-airlines/add-airlines.component';
import { ManageAirlinesComponent } from './components/manage-airlines/manage-airlines.component';
import { ManageSchedulesComponent } from './components/manage-schedules/manage-schedules.component';
import { ManageDiscountsComponent } from './components/manage-discounts/manage-discounts.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminNavBarComponent } from './components/admin-nav-bar/admin-nav-bar.component';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
// import { CapitalizePipe } from 'src/nested/pipes/capitalize.pipe';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {HttpClientModule} from '@angular/common/http'
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
import { RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import {ChartModule} from 'primeng/chart';
// import { AddFlightsComponent } from './components/add-flights/add-flights.component';
import { ManageFlightsComponent } from './components/manage-flights/manage-flights.component';



@NgModule({
  declarations: [
    AddAirlinesComponent,
    ManageAirlinesComponent,
    ManageSchedulesComponent,
    ManageDiscountsComponent,
    AdminHomeComponent,
    AdminNavBarComponent,
    ReportComponent,
    ManageFlightsComponent
  ],
  imports:[
  HttpClientModule ,
    FormsModule,
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
RouterModule,
AdminRoutingModule,
ChartModule
  ],
  providers: [MessageService,ConfirmationService],
})
export class AdminModule { }
