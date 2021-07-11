import { Component, OnInit } from '@angular/core';
import { ShareableDataService } from 'src/app/services/shareable-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.scss']
})
export class ManageBookingComponent implements OnInit {
    bookings : any;
    cuurentDate = new Date();
    deleteTicket:any;
 
  constructor(private msgService: MessageService,private confirmationService: ConfirmationService,private service : ShareableDataService,private route : Router,private flightService : FlightService) { }
 

  ngOnInit(): void {
    this.flightService.getFlights("").subscribe((data) => {
      this.bookings=data;
    })   ; 
 }

 ticketDetail(ticket:any){
   this.service.sendData(ticket);
   this.route.navigate(['./ticketDetails']);
 }


 cancelTicket(ticket:any) {
     this.confirmationService.confirm({
         message: 'Are you sure that you want to perform this action?',
         header: 'Confirmation',
         icon: 'pi pi-exclamation-triangle',
         accept: () => {
          console.log('deleting '+ticket.id);
          this.flightService.cancelTicket(ticket.id);
          this.msgService.add({severity:'success', summary:'Booking Cancelled', detail:""});
          this.ngOnInit();
         }
     });
 }

  // cancelTicket(ticket:any){
  //   console.log('deleting '+ticket.id);
  //   this.flightService.cancelTicket(ticket.id);
  //   this.ngOnInit();
  // }


}
