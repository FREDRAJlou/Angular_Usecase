import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FlightService } from 'src/nested/services/flight.service';

@Component({
  selector: 'app-manage-schedules',
  templateUrl: './manage-schedules.component.html',
  styleUrls: ['./manage-schedules.component.scss']
})
export class ManageSchedulesComponent implements OnInit {
  flights:any=[];
  constructor(private msgService: MessageService,private route : Router,public service : FlightService) { }

  ngOnInit(): void {
    this.service.getFlights('?').subscribe(data=>{
      this.flights=data;
      console.log(this.flights);
    });
  }

  saveFlight(flight:any){
    this.service.updateFlight(flight);
    this.msgService.add({severity:'success', summary:'Airline Updated', detail:""});
  }

}
