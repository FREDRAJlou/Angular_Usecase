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

  flight:any={};
  msgs: Message[]=[];

  constructor(private msgService: MessageService, private navService: NavigationService, private flightService: FlightService, private route : Router) 
  { 
    this.flight={name:'',logo:'',model:'',contactNumber:'',contactAddress:''}
 }

  ngOnInit(): void {
  }

  addAirline(){
    if(this.validateFlight())
    return;
    else{
    this.flightService.getFlight(this.flight.name).subscribe((data)=>{
      if(data[0]!=null){
        this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Airline already Exists"});
      }else{
        this.flightService.saveFlight(this.flight);
        this.route.navigate(['./admin/manageSchedules']);
      }
   
  });
}
}

  validateFlight():boolean{
    console.log(this.flight);
    if(this.flight?.name===""){
      console.log('throeing');
      this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Airline Name required"});
      return true;
    }else if(this.flight?.contactNumber===""){
      this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Conatct Number required"});
      return true;
    }else if(this.flight?.model===""){
      this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Model required"});
      return true;
    }
    return false;
  }

}
