import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  serviceUrl='http://localhost:3000/';
  public user:any;
  constructor( private http : HttpClient ) {
    this.user= {id:0,userId:'',name:'',password:'',role:''};
   }

  saveUser(user:any){
    this.http.post(this.serviceUrl+'users',user).subscribe(data => {
      console.log(data);
    
  });
}

  getUser(name:string):Observable<User[]>{
   console.log(this.serviceUrl+'users');
   var arr :User[]=[];
    return this.http.get<User[]>(this.serviceUrl+'users?name='+name);
   
   
  }


}
