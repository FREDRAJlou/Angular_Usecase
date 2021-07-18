import { Component, OnInit } from '@angular/core';
import { ShareableDataService } from 'src/app/services/shareable-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlightService } from 'src/nested/services/flight.service';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable"
import { formatDate } from '@angular/common';
import {Inject,LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.scss']
})
export class ManageBookingComponent implements OnInit {
    bookings : any;
    currentDate = new Date();
    deleteTicket:any;
    // exportColumns:any[]=[];
    cols:any[]=[];
 
  constructor( @Inject(LOCALE_ID) public locale: string,private msgService: MessageService,private confirmationService: ConfirmationService,private service : ShareableDataService,private route : Router,private flightService : FlightService) { }
 

  ngOnInit(): void {
    this.flightService.getBookings("getAllBookings").subscribe((data) => {
      this.bookings=data;
      for(let i = 0; i < this.bookings.length; i++){
        this.bookings[i].cancel = this.cancellable(this.bookings[i].onwardDate);
      console.log(this.bookings[i].onwardDate+" => "+(this.bookings[i].onwardDate>this.currentDate));
      }
    })   ; 
    this.cols  = [
      { title: "From", dataKey: "from" },
      { title: "Flight", dataKey: "flight" },
      { title: "Date", dataKey: "onwardDate" },
      { title: "To", dataKey: "to" },
      { title: "Return", dataKey: "returnFlight" },
      { title: "Date", dataKey: "returnDate" },
      { title: "Price", dataKey: "price" },
      { title: "Booking Date", dataKey: "date" },
      { title: "Passengers", dataKey: "passenger" }
    ];

  // this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
 }



 cancellable(date1:Date){
  console.log("Entering cancellable "+date1)
  let date = new Date(date1);
  let curr = new Date();
  console.log(date+" > "+curr +" = "+ (date >curr));
  return date>curr;
 }

 ticketDetail(ticket:any){
   this.service.sendData(ticket);
   this.route.navigate(['/user/ticketDetails']);
 }

 exportPdf(ticket:any) {
  let tickets:any[]=[];
  console.log(ticket);
  ticket.passenger="";
  for(let i = 0; i < ticket.passengers.length;i++){
      ticket.passenger+=ticket.passengers[i].name;
  }
 ticket.onwardDate=formatDate(ticket.onwardDate, 'dd-MM-yyyy' ,this.locale);
 ticket.returnDate=formatDate(ticket.returnDate, 'dd-MM-yyyy' ,this.locale);
 ticket.date=formatDate(ticket.date, 'dd-MM-yyyy' ,this.locale);
  tickets.push(ticket);
        const doc = new jsPDF('p','pt');
       
        autoTable(doc, {
          columns: this.cols,
          body: tickets});
         
        doc.save('Ticket-'+ticket.date+'.pdf');
      }
     




 cancelTicket(ticket:any) {
     this.confirmationService.confirm({
         message: 'Are you sure that you want to perform this action?',
         header: 'Confirmation',
         icon: 'pi pi-exclamation-triangle',
         accept: () => {
          console.log('deleting '+ticket.id);
         this.flightService.cancelTicket(ticket.id).subscribe(data=>{
          console.log(data);
        });
        this.ngOnInit();
          this.msgService.add({severity:'success', summary:'Booking Cancelled', detail:""});
         }
     });
 }

  // cancelTicket(ticket:any){
  //   console.log('deleting '+ticket.id);
  //   this.flightService.cancelTicket(ticket.id);
  //   this.ngOnInit();
  // }


}
