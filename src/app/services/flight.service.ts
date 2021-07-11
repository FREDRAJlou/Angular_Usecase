import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  selectedFlight: any={};
  selectedReturnFlight: any={};
  serviceUrl='http://localhost:3000/';

  constructor( private http : HttpClient ) { }

  bookFlight(ticket:any){
    console.log('Saving...'+ticket);
    ticket.id ="20";
    this.http.post(this.serviceUrl+'bookings',ticket).subscribe(data => {
      console.log(data);
    
  });
}

  getFlights(query:string): Observable<Booking[]>{
   return  this.http.get<Booking[]>(this.serviceUrl+'bookings'+query);
  }

  cancelTicket(id:any){
    console.log(id);
    this.http.delete(this.serviceUrl+'bookings/'+id).subscribe(data=>{
      console.log(data);
    });
  }
}
