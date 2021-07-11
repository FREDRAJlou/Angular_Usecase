import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  items: MenuItem[];
  userItems:MenuItem[];
  user: any ={};
  constructor() {
    this.userItems=[];
    this.items=[{
      label: 'Home', routerLink:"./home"},
      {label: 'About', routerLink:"./about"},
       { label: 'Flights', routerLink:"./flights"
      },
     ]
     if(this.user.valid){
       this.items.push( { label: 'LogOut', routerLink:"./home"
      });
     }else{
      this.items.push( { label: 'Login/Register', routerLink:"./login"});
     }
   }
   setItems(menu:MenuItem[]){
    this.items=menu;
   }

   setUserNavigation(){
    this.userItems=([{
      label: 'Book Flight', routerLink:"/bookFlight"},
      {label: 'Manage Bookings', routerLink:"/manageBooking"},
       { label: 'Booking History', routerLink:"/bookingHistory"
      },
      { label: 'LogOut', routerLink:"./"
    }]);
  }

    setAdminNavigation(){
      this.userItems=[{
        label: 'Manage Schedules', routerLink:"user/bookFlight"},
        {label: 'Manage Discounts', routerLink:"user/manageBooking"},
         { label: 'Manage Airlines', routerLink:"user/bookingHistory"
        },
        { label: 'Reports', routerLink:"./"},
        { label: 'LogOut', routerLink:"./"
      }];
    }
}
