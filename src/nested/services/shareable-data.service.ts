import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareableDataService {

public transferObject : BehaviorSubject<any>= new BehaviorSubject('data') ;
public msg = this.transferObject.asObservable();
  constructor() {
  //   var t={};
  //   this.transferObject = new BehaviorSubject(t);
   }
sendData(data:any){
  console.log("Sending ... "+data)
  this.transferObject.next(data);
}
}
