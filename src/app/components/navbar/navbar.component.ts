import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   items: MenuItem[];
  constructor() {
     this.items = [{
          label: 'Book Flight', routerLink:""},
          {label: 'Manage Bookings', routerLink:""},
           { label: 'Booking History', routerLink:"./bookingHistory"
          }];
   }


  ngOnInit() {
      this.items = [{
          label: 'Book Flight', routerLink:[]},
          {label: 'Manage Bookings', routerLink:"./manageBooking"},
           { label: 'Booking History', routerLink:"./bookingHistory"
          }];

}
}
