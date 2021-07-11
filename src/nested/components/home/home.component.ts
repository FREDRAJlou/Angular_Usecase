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
    if(this.user.role=="USER"){
      console.log(this.user.name);
      this.route.navigate(['./user/bookFlight']);
    }else{
      this.route.navigate(['./login']);
    }
  }

  manageBookings(){
    this.navService.setItems([]);
    if(this.user.name!=''){
      console.log(this.user.name);
      this.route.navigate(['./user/manageBooking']);
    }else{
      this.route.navigate(['./login']);
    }
  }

  viewBookings(){
    if(this.user.name!=''){
      console.log(this.user.name);
      this.route.navigate(['./user/bookingHistory']);
    }else{
      this.route.navigate(['./login']);
    }
  }

estimateTicket(){
  
}  

}