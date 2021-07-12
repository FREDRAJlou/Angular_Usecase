import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';
import { ShareableDataService } from 'src/app/services/shareable-data.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {

  ticket : any ={type:'',flight:'',from:'',to:'',date:'',id:'',price:'',returnDate:''}
  flight:any = [];
  returnFlight:any = [];
  minDate: Date = new Date();
  constructor(public service : FlightService,private route : Router,private shared : ShareableDataService) { 
    console.log("bbok Flight");
  }


  ngOnInit(): void {
    this.ticket.minDate = new Date();
    this.ticket.type='One Way';
    this.flight=[];
    this.returnFlight=[];
  }

  populateFlights(){
    console.log("inside populate flights");
    this.service.getFlights('?').subscribe(data=>{
      this.flight=data;
      this.returnFlight=data;
      console.log(this.flight);
    });
  }

  onRowSelect(event:any){
    console.log(event.data);
    console.log(this.service.selectedFlight);
  }
  onRowUnselect(event:any){
    console.log(event.data);
    console.log(this.service.selectedFlight);
  }

  continueBooking(){
    this.shared.sendData(this.ticket);
    this.route.navigate(['./user/checkoutTicket']);
  }

}
