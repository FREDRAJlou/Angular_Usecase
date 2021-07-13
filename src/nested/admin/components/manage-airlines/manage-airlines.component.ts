import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FlightService } from 'src/nested/services/flight.service';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.scss']
})
export class ManageAirlinesComponent implements OnInit {

  flights:any=[];
  constructor(private msgService: MessageService,private confirmationService: ConfirmationService,private route : Router,public service : FlightService) { }

  ngOnInit(): void {
    this.service.getFlights('?').subscribe(data=>{
      this.flights=data;
      console.log(this.flights);
    });
  }

  addAirline(){
    this.route.navigate(['./admin/addAirlines']);
  }
  // deleteAirline(flight:any){
  //   this.service.deleteFlight(flight.id);
  // }
  deleteAirline(flight:any){
        this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
         console.log('deleting '+flight.id);
         this.service.deleteFlight(flight.id);
         this.msgService.add({severity:'success', summary:'Airline Deleted', detail:""});
         this.service.getFlights('?').subscribe(data=>{
          this.flights=data;
          console.log(this.flights);
        });
        }
    });
  }


}
