import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { FlightService } from 'src/nested/services/flight.service';
import { NavigationService } from 'src/nested/services/navigation.service';

@Component({
  selector: 'app-add-airlines',
  templateUrl: './add-airlines.component.html',
  styleUrls: ['./add-airlines.component.scss']
})
export class AddAirlinesComponent implements OnInit {

  airline:any={};
  msgs: Message[]=[];

  constructor(private msgService: MessageService, private navService: NavigationService, private flightService: FlightService, private route : Router) 
  { 
    this.airline={name:'',logo:'',contactNumber:'',contactAddress:''}
 }

  ngOnInit(): void {
  }

  addAirline(){
    if(this.validateFlight())
    return;
    else{
    this.flightService.getAirlines('getAirlineByName/'+this.airline.name).subscribe((data)=>{
      if(data[0]!=null){
        this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Airline already Exists"});
      }else{
      console.log("Saving Airline...")
        this.flightService.saveAirline(this.airline);
        this.route.navigate(['./admin/manageAirlines']);
      }
   
  });
}
}

  validateFlight():boolean{
    console.log(this.airline);
    if(this.airline?.name===""){
      console.log('throeing');
      this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Airline Name required"});
      return true;
    }else if(this.airline?.contactNumber===""){
      this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Conatct Number required"});
      return true;
    }else if(this.airline?.model===""){
      this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Model required"});
      return true;
    }
    return false;
  }

}
