import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/nested/services/flight.service';
import { ShareableDataService } from 'src/app/services/shareable-data.service';
import { NavigationService } from 'src/nested/services/navigation.service';
import { MsgService } from 'src/nested/services/msg.service';
import { MessageService } from 'primeng/api';

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
  constructor(private msg : MessageService,private msgService : MsgService,private navService : NavigationService,private service : FlightService, private route : Router, private shared : ShareableDataService) { 
   
  }

  ngOnInit(): void {
    this.count=1;
    this.totalPrice=0;
    this.passengers=[{id:1,name:'',age:'',meal:'None',phone:''}];
    this.shared.msg.subscribe(data => {
      this.ticket = data;
      console.log("This Ticket ="+data);
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
      this.service.getDiscounts("?code='"+this.discount.toUpperCase+"'").subscribe(data=>{
        console.log("?code='"+this.discount+"'"+data);
        if(data[0]!=null&&data[0].discount!=0)
      this.totalPrice = (this.totalPrice/100)*(100-data[0].discount);
      });
    }
    this.msg.add({severity:'info', summary:"Discount Applied ", detail:""});
    this.msgService.infoMsg("Discount Applied");
  }

  checkout(){
   var ticket  ={type:'',logo:'',booker:'',price:0,onwardDate:'',returnDate:'',flight:'',returnFlight:'',from:'',to:'',date:new Date(),id:'',passengers:[{}]}
    ticket.flight = this.ticket.flight;
    ticket.returnFlight = this.ticket.returnFlight;
    ticket.logo = this.ticket.logo;
    ticket.onwardDate = this.ticket.onwardDate;
    ticket.returnDate = this.ticket.returnDate;
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
   ticket.date = new Date();
    ticket.price = this.totalPrice;
    ticket.booker = this.navService.user.name;
    console.log(ticket);
   var ans =  prompt('Y/N');
   if(ans=='Y')
    this.service.bookFlight(ticket);
     this.msg.add({severity:'info', summary:"Ticket Booked ", detail:""});
    this.msgService.infoMsg("Ticket Booked ");
    this.route.navigate(['./user/bookingHistory']);
  }

}
