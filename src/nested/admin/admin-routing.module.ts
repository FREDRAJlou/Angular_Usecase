import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlinesComponent } from './components/add-airlines/add-airlines.component';
import { ManageAirlinesComponent } from './components/manage-airlines/manage-airlines.component';
import { ManageSchedulesComponent } from './components/manage-schedules/manage-schedules.component';
import { ManageDiscountsComponent } from './components/manage-discounts/manage-discounts.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ReportComponent } from './report/report.component';
import { ManageFlightsComponent } from './components/manage-flights/manage-flights.component';



const routes: Routes = [
  
  { path: '', component:AdminHomeComponent,children:[
    { path: 'manageSchedules', component: ManageSchedulesComponent},
   { path: 'manageDiscounts', component: ManageDiscountsComponent},
   { path: 'addAirlines', component: AddAirlinesComponent},
   { path: 'manageFlights', component: ManageFlightsComponent},
   { path: 'manageAirlines', component: ManageAirlinesComponent},
   { path: 'reports', component: ReportComponent},
  { path: '**', component: AdminHomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
