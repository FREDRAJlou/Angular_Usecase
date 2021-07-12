import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/nested/services/flight.service';
import { ShareableDataService } from 'src/app/services/shareable-data.service';

@Component({
  selector: 'app-checkout-ticket',
  templateUrl: './checkout-ticket.component.html',
  styleUrls: ['./checkout-ticket.component.scss']
})
export class CheckoutTicketComponent implements OnInit {
  count : number=1;
  discount: string='';
  totalPrice:number=0;
  passengers : Array<any>=[{}];
  ticket :any={};
  meals =[{name:'Veg'},{name:'Non-Veg'},{name:'None'}];
  constructor(private service : FlightService, private route : Router, private shared : ShareableDataService) { 
   
  }

  ngOnInit(): void {
    this.count=1;
    this.totalPrice=0;
    this.passengers=[{id:1,name:'',age:'',meal:'None',phone:''}];
    this.shared.msg.subscribe(data => {
      this.ticket = data;
      console.log("From  details obs"+data);
      console.log("From  details obs"+JSON.stringify(this.ticket));
    });
    this.totalPrice=this.ticket.price;
  }

  onChangeCount(){
    if(this.count!=this.passengers.length){
      for(let i = this.passengers.length+1; i <= this.count;i++){
        this.passengers.push({id:i,name:'',age:'',meal:'None',phone:''});
      }
      for(let i = this.passengers.length; i > this.count;i--){
        this.passengers.pop();
      }
    }
    this.totalPrice=this.ticket.price*this.count;
  }

  applyDiscount(){
    if(this.discount!=''){
      this.service.getDiscounts("?code="+this.discount).subscribe(data=>{
        if(data[0]!=null&&data[0].discount!=0)
      this.totalPrice = (this.totalPrice/100)*data[0].discount;
      });
    }
  }

  checkout(){
   var ticket={id:'',flight:'',image:'',price:0,from:'',to:'',date:'',type:'',passengers:[{}]};
    ticket.flight = this.ticket.name;
    ticket.image = this.ticket.logo;
    ticket.date = this.ticket.depature;
    ticket.from = this.ticket.from;
    ticket.to = this.ticket.to;
    ticket.price = this.totalPrice;
    ticket.type = this.ticket.type;
    // var pass:Array<any>=[{}];
    // for(let i = 0 ; i < this.passengers.length;i++){
    //   if(this.passengers[i].name!=null){
    //     pass.push[passengers[i]];
    //   }
    // }

    ticket.passengers = this.passengers;
    this.service.bookFlight(ticket);
    this.route.navigate(['./user/bookingHistory']);
  }

}
