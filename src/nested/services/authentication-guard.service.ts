import { Injectable } from '@angular/core';
import { Router, CanActivateChild  , ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { NavigationService } from 'src/nested/services/navigation.service';
 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivateChild   {

  userLinks=['','manageBooking','bookingHistory','bookFlight','ticketDetails','checkoutTicket'];
  adminLinks =['','addAirlines','manageAirlines','manageSchedules','manageDiscounts','manageFlights','reports'];
  constructor(private route : Router,private nav : NavigationService) { }
  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const url: string = route.url.join('');
console.log("canActivate"+url);  
console.log("User from auth"+this.nav.user.role);      
if(this.nav.user?.role){
  if(this.nav.user?.role=='USER'&&this.userLinks.includes(url))
return true;
if(this.nav.user?.role=='ADMIN'&&this.adminLinks.includes(url))
return true;
}    
// return true;      
alert('You are not allowed to view this page. You are redirected to Home Page'); 
this.route.navigate(["home"]);             
return false;     
} 
}
