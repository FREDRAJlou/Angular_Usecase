import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { NavigationService } from 'src/app/services/navigation.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:User;
  constructor(private route : Router, private navService: NavigationService) { 
    console.log(this.navService.user);
    this.user = this.navService.user;
  }

  ngOnInit(): void {
  }

  searchFlight(){
    this.route.navigate(['./flights']);
  }

  bookTicket(){
    if(this.user.name!=''){
      console.log(this.user.name);
      this.route.navigate(['./bookFlight']);
    }else{
      this.route.navigate(['./login']);
    }
  }

  manageBookings(){
    if(this.user.name!=''){
      console.log(this.user.name);
      this.route.navigate(['./manageBooking']);
    }else{
      this.route.navigate(['./login']);
    }
  }

  viewBookings(){
    if(this.user.name!=''){
      console.log(this.user.name);
      this.route.navigate(['./bookingHistory']);
    }else{
      this.route.navigate(['./login']);
    }
  }

estimateTicket(){
  this.navService.setItems([{
    label: 'Book Flight', routerLink:"./bookFlight"},
    {label: 'Manage Bookings', routerLink:"./manageBooking"},
     { label: 'Booking History', routerLink:"./bookingHistory"
    },
    { label: 'LogOut', routerLink:"./"
  }]);
}  

}
