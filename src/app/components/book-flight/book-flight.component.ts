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
  constructor(public service : FlightService,private route : Router,private shared : ShareableDataService) { }

  ngOnInit(): void {
    this.ticket.minDate = new Date();
    this.ticket.type='One Way';
    this.flight=[{id:1,logo:'https://airhex.com/images/airline-logos/alt/air-deccan.png',name:'Deccan Airlines',depature:'07/10/2021',price:150,from:'India',to:'Australia'}];
    this.returnFlight=[{id:1,logo:'https://airhex.com/images/airline-logos/alt/air-deccan.png',name:'Deccan Airlines',depature:'07/11/2021',price:250,from:'Australia',to:'India'}];
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
    this.route.navigate(['./checkoutTicket']);
  }

}
