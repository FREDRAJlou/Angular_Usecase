import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/nested/services/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  flights: any;
  constructor(public service : FlightService) { }

  ngOnInit(): void {
    this.service.getFlights('getFlights').subscribe(data=>{
      this.flights=data;
      console.log(this.flights);
    });
  }

}
