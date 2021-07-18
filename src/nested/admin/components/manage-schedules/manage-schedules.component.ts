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
  airline:any={};
  airlines:any=[];
  constructor(private msgService: MessageService,private route : Router,public service : FlightService) { }

  ngOnInit(): void {
    this.service.getAirlines("getAllAirlines").subscribe(data=>{
      data.forEach( data1 =>{
       let  air:any={name:data1.name};
       console.log("Original "+data1.name+" obj => "+air);
        this.airlines.push(air);
      })
    })
    // if(this.service.airline==''){
    //   this.airline=this.service.airline;
    // this.service.getFlights('?').subscribe(data=>{
    //   this.flights=data;
    //   console.log(this.flights);
    // });
    // }else{
    //   this.airline=this.service.airline;
    //   console.log(this.airline.name);
    //   this.service.getFlights('?name='+this.service.airline?.name).subscribe(data=>{
    //     this.flights=data;
    //     console.log(this.flights);
    // });
  // }
}

search(){
  let query ="";
  let query1="";
  console.log("params => "+this.airline.name+""+this.airline.flightNumber+""+this.airline.model);
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

  saveFlight(flight:any){
    if(flight.schedule==''){
      this.msgService.add({severity:'warning', summary:'Schedule required', detail:""});
      return;
    }
    this.service.updateFlight(flight);
    this.msgService.add({severity:'success', summary:'Schedule Updated', detail:""});
  }


}
