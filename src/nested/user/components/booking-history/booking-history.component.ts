import { Component, OnInit } from '@angular/core';
import { ShareableDataService } from 'src/app/services/shareable-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {
    bookings : any;
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


}
