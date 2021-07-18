import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FlightService } from 'src/nested/services/flight.service';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.scss']
})
export class ManageFlightsComponent implements OnInit {
  flights:any=[];
  airline:any={};
  airlines:any=[];
  constructor(private msgService: MessageService,private route : Router,public service : FlightService) { }

  ngOnInit(): void {
    if(this.service.airline==''){
      this.airline=this.service.airline;
    this.service.getFlights('getFlights').subscribe(data=>{
      this.flights=data;
      console.log(this.flights);
    });
    }else{
      this.airline=this.service.airline;
      console.log(this.airline.name);
      this.service.getFlight(this.service.airline?.name).subscribe(data=>{
        this.flights=data;
        console.log(this.flights);
    });
  }
}

search(){
  let query ="";
  let query1="";
  console.log("params => "+this.airline.name+""+this.airline.flightNumber+""+this.airline.model);
  this.service.getAirlines(this.airline.name).subscribe(data=>{
      this.airline=data[0];
      });
  if(this.airline.name){
    alert("Name => "+this.airline.name);
    query1=query1.concat(this.airline.name);
    query= query.concat('?name='+this.airline.name);
  }
    if(this.airline.flightNumber){
    query= query.concat('&number='+this.airline.flightNumber);
    query1=query1.concat(','+this.airline.flightNumber);
    }
    if(this.airline.model){
    query=query.concat('&model='+this.airline.model);
    query1=query1.concat(','+this.airline.model);
    }
    console.log(query1);
  this.service.getFlight(query1).subscribe(data=>{
    this.flights=data;
    console.log(this.flights);
});
}

addFlight(){
  this.flights.push({
    id:'',
    "name": this.airline.name,
  number:"",
  "price": 0,
  "active": true,
  "from": "",
  "to": "",
  "logo":this.airline.logo,
  "schedule": "",
  "model": "",
"airline":this.airline});

}

validateFlight(flight:any){
  if(flight.number==''){
    this.msgService.add({severity:'warning', summary:'Flight Number required', detail:""});
    return true;
  }
  if(flight.from==''){
    this.msgService.add({severity:'warning', summary:'From Location required', detail:""});
    return true;
  }
  if(flight.to==''){
    this.msgService.add({severity:'warning', summary:'To Location required', detail:""});
    return true;
  }
  if(flight.price==''){
    this.msgService.add({severity:'warning', summary:'Price required', detail:""});
    return true;
  }
  if(flight.model==''){
    this.msgService.add({severity:'warning', summary:'Model required', detail:""});
    return true;
  }
  return false;
}

  saveFlight(flight:any){
    console.log("saving ==> "+JSON.stringify(flight));
    if(this.validateFlight(flight))
    return;
    if(flight.id<1){
      console.log("saving ==> "+flight)
      this.service.saveFlight(flight);
      this.msgService.add({severity:'success', summary:'Flight Saved', detail:""});
    }else{
      console.log("updating ==> "+flight)
    this.service.updateFlight(flight);
    this.msgService.add({severity:'success', summary:'Flight Updated', detail:""});
    }
  }


}
