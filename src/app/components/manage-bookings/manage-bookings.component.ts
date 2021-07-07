import { Component, OnInit } from '@angular/core';
import { ShareableDataService } from 'src/app/services/shareable-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.scss']
})
export class ManageBookingComponent implements OnInit {
    bookings : any;
    cuurentDate = new Date();
 
  constructor(private service : ShareableDataService,private route : Router) { }
 

  ngOnInit(): void {
    this.bookings = [{id:1,flight:'Deccan Airlines',date:'28-07-2021',price:100,image:'https://airhex.com/images/airline-logos/alt/air-deccan.png',from:'India',to:'Singapore',type:'One way'
    ,"passengers":[{name:'Fred',age:25,phone:'8667515714'},{name:'Esther',age:60,phone:'8667515714'}]},
   {id:2,flight:'Malaysia Airlines',date:'07-07-2021',price:100,image:'https://th.bing.com/th/id/R.b9b989f9a450e19870e680eba13b5b10?rik=Edr5565SJC4ZpQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-pDkbQKPunE0%2fUPnQQMkj5jI%2fAAAAAAAAFN4%2flkniI08zzIA%2fs1600%2fLogo%2bMalaysia%2bAirlines.jpg&ehk=SAV8qLDwPHHDUd%2fl2Lo9ldHQbzjiyjQFX85dkgBZM8I%3d&risl=&pid=ImgRaw',from:'Singapore',to:'India',type:'Round Trip'
   ,"passengers":[{name:'Fred',age:25,phone:'8667515714'},{name:'Esther',age:60,phone:'8667515714'}]},
   {id:3,flight:'Indigo Airlines',date:'16-07-2021',price:100,image:'https://th.bing.com/th/id/R.032eba4da0b54d568f8b4203f60fb9c6?rik=d%2fAJgerf9A62qg&riu=http%3a%2f%2fwww.contactnumbers.in%2fwp-content%2fuploads%2f2015%2f04%2fIndiGo_airlines_Logo2.jpg&ehk=JkB2AETVW%2ftF1tUOzpgf728DfV4L63CEutBqzRI9N6g%3d&risl=&pid=ImgRaw',from:'Srilanka',to:'Singapore',type:'One way'
   ,"passengers":[{name:'Fred',age:25,phone:'8667515714'},{name:'Esther',age:60,phone:'8667515714'}]},];
 }

 ticketDetail(ticket:any){
   this.service.sendData(ticket);
   this.route.navigate(['./ticketDetails']);
 }


  cancelTicket(ticket:any){
    prompt('Cancelling Ticket(Y/N)');
  }


}
