import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/nested/services/navigation.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor(private route : Router, private navService: NavigationService) { 
  }

  ngOnInit(): void {
    this.navService.setItems([{
      label: 'Book Flight', routerLink:"./user/bookFlight"},
      {label: 'Manage Bookings', routerLink:"./user/manageBooking"},
       { label: 'Booking History', routerLink:"./user/bookingHistory"
      },
      { label: 'LogOut', routerLink:"./"
    }]);
  }

}
