import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { UserService } from 'src/app/services/user.service';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user : any;
msgs: Message[]=[];

  constructor(private msgService: MessageService, private navService: NavigationService, private userService: UserService, private route : Router) 
  { 
    this.user= {id:0,userId:'',name:'',password:'',role:''};
  }

  ngOnInit(): void {
  
  }

  register(){
    if(this.validateUser())
    return;
    this.user.role="USER";
    this.userService.saveUser(this.user);
  }

  validateUser():boolean{
    if(this.user.name==''){
      console.log('throeing');
      this.msgs.push({severity:'warning', summary:'Warn Message', detail:"Username required"});
      this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Username required"});
      return true;
    }else if(this.user.password==''){
      this.msgs.push({severity:'warning', summary:'Warn Message', detail:"Password required"});
      this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Password required"});
      return true;
    }
    return false;
  }

  login(){
    if(this.validateUser())
    return;
  console.log('getting user data fro'+this.user.name);
this.userService.getUser(this.user.name).subscribe((data)=>{
console.log(data[0]);
var userData= data[0];
   if(userData!=null){
    console.log('User not null');
     if(userData.password!=this.user.password){
      this.msgs.push({severity:'warning', summary:'Warn Message', detail:"Invalid Password"});
      this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Invalid Password"});
      return;
     }
     this.user=userData;
     this.navService.user=this.user;
  if(this.user.role=="USER"){
    console.log('USRE ROLE');
    this.navService.setItems([{
      label: 'Book Flight', routerLink:"./bookFlight"},
      {label: 'Manage Bookings', routerLink:"./manageBooking"},
       { label: 'Booking History', routerLink:"./bookingHistory"
      },
      { label: 'LogOut', routerLink:"./"
    }]);
    console.log('navigating...');
    this.route.navigate(['./bookingHistory']);
  }else{
    this.navService.setItems([{
      label: 'Manage Schedules', routerLink:"./bookFlight"},
      {label: 'Manage Discounts', routerLink:"./manageBooking"},
       { label: 'Manage Airlines', routerLink:"./bookingHistory"
      },
      { label: 'Reports', routerLink:"./"},
      { label: 'LogOut', routerLink:"./"
    }])
  }
  }else{
    this.msgs.push({severity:'warning', summary:'Warn Message', detail:"Invalid Username/password"});
    this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Invalid Username/password"});

  }
})}
}
