import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.scss']
})
export class ManageAirlinesComponent implements OnInit {

  flights:any=[];
  constructor(private route : Router,public service : FlightService) { }

  ngOnInit(): void {
    this.service.getFlights('?').subscribe(data=>{
      this.flights=data;
      console.log(this.flights);
    });
  }

  addAirline(){
    this.route.navigate(['/admin/addAirline']);
  }

}
