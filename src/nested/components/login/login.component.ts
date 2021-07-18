import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/nested/services/navigation.service';
import { UserService } from 'src/nested/services/user.service';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';
import { User } from 'src/app/models/user.model';
import { AuthenticationGuardService } from 'src/nested/services/authentication-guard.service';
import { HttpClient } from '@angular/common/http';
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
    this.userService.getUser(this.user.name).subscribe((data)=>{
      console.log(data);
      if(data!=null&&data.name==this.user.name){
        this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Username already Exists"});
      }else{
        this.user.role="USER";
        this.userService.saveUser(this.user);
        this.route.navigate(['./home']);
      }
   
  });
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
    this.navService.user=this.user;
this.userService.getUser(this.user.name).subscribe((data)=>{
console.log(data);
var userData= data;
   if(userData!=null){
    console.log('User not null');
     if(userData.password!=this.user.password){
      this.msgs.push({severity:'warning', summary:'Warn Message', detail:"Invalid Password"});
      this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Invalid Password"});
      return;
     }
     this.user=userData;
  if(this.user.role=="USER"){
    console.log('USRE ROLE');
    this.navService.setUserNavigation();
    console.log('navigating...');
    this.route.navigate(['./home']);
  }else if(this.user.role=="ADMIN"){
    this.navService.setAdminNavigation();
    this.route.navigate(['./home']);
  }else{
    this.navService.setAdminNavigation();
  }
  }else{
    this.msgs.push({severity:'warning', summary:'Warn Message', detail:"Invalid Username/password"});
    this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Invalid Username/password"});

  }
})
this.navService.items=[];
}
}
