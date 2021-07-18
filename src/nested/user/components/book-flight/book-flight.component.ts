import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FlightService } from 'src/nested/services/flight.service';
import { ShareableDataService } from 'src/nested/services/shareable-data.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {

  ticket : any ={type:'',onwardDate:'',returnDate:'',flight:'',returnFlight:'',from:'',to:'',date:'',id:'',price:''}
  flights:any = [];
  returnFlights:any = [];
  minDate: Date = new Date();
  Locs =[{name:'Chennai',disabled:false},{name:'Bangalore',disabled:false},{name:'Kolkata',disabled:false},{name:'Pune',disabled:false},{name:'Mumbai',disabled:false}];
  fromLoc:any=[];
  toLoc:any=[];
  constructor(public service : FlightService,private route : Router,private shared : ShareableDataService,private msgService: MessageService) { 
    console.log("bbok Flight");
  }


  ngOnInit(): void {
    this.ticket.minDate = new Date();
    this.ticket.type='One Way';
    this.flights=[];
    this.returnFlights=[];
    this.fromLoc=this.Locs;
    this.toLoc=this.Locs;
  }

  populateTo(){
    for(let i=0;i<this.toLoc.length;i++){
      if(this.toLoc[i]?.name==this.ticket.from)
      this.toLoc[i].disabled=true;
      else
      this.toLoc[i].disabled=false;
    }
    console.log('this.toLoc ='+this.toLoc);
  }

  populateFrom(){
    for(let i=0;i<this.fromLoc.length;i++){
      if(this.fromLoc[i]?.name==this.ticket.to)
      this.fromLoc[i].disabled=true;
      else
      this.fromLoc[i].disabled=false;
    }
  }

  populateFlights(){
    if(this.validateBooking())
    return;
    console.log("inside populate flights");
    this.service.getFlightByLoc(this.ticket.from+','+this.ticket.to).subscribe(data=>{
      this.flights=data;
      console.log(this.flights);
    });
    this.service.getFlightByLoc(this.ticket.to+','+this.ticket.from).subscribe(data=>{
      this.returnFlights=data;
      console.log(this.flights);
    });
  }


  onRowSelect(event:any){
    console.log(event.data);
    console.log(this.service.selectedFlight);
    this.ticket.flight=this.service.selectedFlight.airline.name;
    this.ticket.returnFlight=this.service.selectedReturnFlight.name;
  }
  onRowUnselect(event:any){
    console.log(event.data);
    console.log(this.service.selectedFlight);
    this.ticket.returnFlight=this.service.selectedReturnFlight.airline.name;
    this.ticket.flight=this.service.selectedFlight.name;
  }

  validateBooking(){
    if(this.ticket.type=="Round Trip"){
        if(this.ticket.returnDate==''){
          this.msgService.add({severity:'warning', summary:'Return Date required', detail:""});
          return true;
        }
        if(this.returnFlights.length!=0&&this.service.selectedReturnFlight?.id==''){
          this.msgService.add({severity:'warning', summary:'Select Return Flight/ Change to One Way Travel', detail:""});
          return true;
        }
      }
      if(this.ticket.onwardDate==''){
        this.msgService.add({severity:'warning', summary:'Onward Date required', detail:""});
        return true;
      }
      if(this.flights.length!=0&&this.service.selectedFlight?.id==''){
        this.msgService.add({severity:'warning', summary:'Select Flight', detail:""});
        return true;
      }
      return false;
  }

  continueBooking(){
    if(this.validateBooking())
    return;
    this.ticket.price = this.service.selectedFlight.price;
    // this.ticket.flight= this.service.selectedFlight.name;
    if(this.service.selectedReturnFlight?.price){
      console.log(this.service.selectedReturnFlight?.price)
      this.ticket.price = this.ticket.price +this.service.selectedReturnFlight?.price;
      // this.ticket.returnFlight= this.service.selectedReturnFlight.name;
    }
    console.log(JSON.stringify(this.ticket));
    this.shared.sendData(this.ticket);
    this.route.navigate(['./user/checkoutTicket']);
  }

}
