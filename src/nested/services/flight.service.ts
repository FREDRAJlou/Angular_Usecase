import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  airline:any={};
  selectedFlight: any={};
  selectedReturnFlight: any={};
  serviceUrl='http://localhost:3000/';
  url='http://localhost:9092/airlines/airlines/';
  bookingUrl='http://localhost:9092/booking/';

  constructor( private http : HttpClient ) { }

  //discounts

saveDiscount(discount:any){
  console.log('Saving...'+discount);
  if(discount.id<1)
  this.http.post(this.url+'saveDiscount',discount).subscribe(data => {
    console.log(data);
});
else{
  this.http.put(this.url+'updateDiscount',discount).subscribe(data => {
    console.log(data);
});}
}



getDiscounts(query:string): Observable<any>{
  return  this.http.get(this.url+query);
}

//Airlines

 getAirlines(query:string): Observable<any[]>{
  return  this.http.get<any[]>(this.url+query);
 }

 saveAirline(airline:any){
  airline.active=true;
  console.log('Saving...'+airline);
  // if(airline.id<1)
  this.http.post(this.url+'saveAirline',airline).subscribe(data => {
    console.log(data);
});
// else{
//   this.http.put(this.serviceUrl+'airlines/saveAirline'+airline.id,airline).subscribe(data => {
//     console.log(data);
// });}
}

deleteAirline(id:any){
  this.http.delete(this.url+'deleteAirline/'+id).subscribe();
}

//Flights
getFlights(query:string): Observable<any>{
  return  this.http.get<any>(this.url+query);
 }

 getFlightsFromBooking(query:string): Observable<Booking[]>{
  return  this.http.get<Booking[]>(this.bookingUrl+query);
 }

deleteFlight(flight:any){
  this.http.delete(this.url+'deleteFlight/'+flight).subscribe(data => {
    console.log(data);
});
}
  getFlight(name:string): Observable<Booking[]>{
    console.log("Params in get flight "+ name);
    return  this.http.get<Booking[]>(this.url+'getFlightByName/'+name);
   }

   getFlightByLoc(name:string): Observable<any>{
    console.log("Params in get flight "+ name);
    return  this.http.get<any>(this.url+'getFlightByLoc/'+name);
   }

   getFlightLocs(query:string): Observable<any>{
    console.log("Params in get flight "+ query);
    return  this.http.get<any>(this.url+'getFlightLocs/'+query);
   }

   saveFlight(flight:any){
    console.log('Saving...'+flight);
    this.http.post(this.url+'saveFlight',flight).subscribe(data => {
      console.log(data);
  });
  }
  
  updateFlight(flight:any){
    console.log('Updating...'+flight);
    this.http.put(this.url+'updateFlight',flight).subscribe(data => {
      console.log(data);
    
  });
  }
  

   //Bookings
  bookFlight(ticket:any){
    console.log('Saving...'+ticket);
    this.http.post(this.bookingUrl+'saveBooking',ticket).subscribe(
      result =>  {
      console.log(result);
      return false;
     } ,
      error =>{
        console.log(error);
        return true;
  });
  return false;
}

   getBookings(query:string): Observable<Booking[]>{
     console.log("====>  "+this.bookingUrl+query);
    return  this.http.get<Booking[]>(this.bookingUrl+query);
   }

  cancelTicket(id:any){
    console.log(id);
   return this.http.delete(this.bookingUrl+'deleteBooking/'+id)
  }
}
