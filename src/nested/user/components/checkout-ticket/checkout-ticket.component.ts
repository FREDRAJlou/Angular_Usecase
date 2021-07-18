import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/nested/services/flight.service';
import { ShareableDataService } from 'src/nested/services/shareable-data.service';
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
  constructor(private share : ShareableDataService,private msg : MessageService,private msgService : MsgService,private navService : NavigationService,private service : FlightService, private route : Router, private shared : ShareableDataService) { 
   
  }

  ngOnInit(): void {
    this.count=1;
    this.totalPrice=0;
    this.shared.msg.subscribe(data => {
      this.ticket = data;
      console.log("This Ticket ="+data);
      console.log("From  details obs"+JSON.stringify(this.ticket));
    });
    this.ticket.passengers=[{id:1,name:'',age:'',meal:'None',phone:''}];
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
      this.service.getDiscounts("getDiscountByCode/"+this.discount.toUpperCase()).subscribe(data=>{
        console.log(data);
        if(data[0]!=null&&data[0].discount!=0)
      this.totalPrice = (this.totalPrice/100)*(100-data[0].discount);
      else{
        this.msgService.errorMsg("Invalid Discount Code");
      }
      });
    }
    this.msg.add({severity:'info', summary:"Discount Applied ", detail:""});
    this.msgService.infoMsg("Discount Applied");
  }

  validateCheckout(){
   for(let i = 0; i <this.ticket.passengers.length; i++){
      let pass=this.ticket.passengers[i];
      if(pass?.name==''){
        this.msgService.warningMsg('Passenger name required');
        return true;
      }
      if(pass.age==''){
        this.msgService.warningMsg('Passenger age required');
        return true;
      }
      if(pass.meal==''){
        this.msgService.warningMsg('Select Meal preference');
        return true;
      }
    }
      return false;
  }

  checkout(){
    if(this.validateCheckout())
    return;
   var ticket  ={pnr:'',type:'',logo:'',booker:'',price:0,onwardDate:'',returnDate:'',flight:'',returnFlight:'',from:'',to:'',date:new Date(),id:0,passengers:[{}]}
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

    ticket.passengers = this.ticket.passengers;
   ticket.date = new Date();
    ticket.price = this.totalPrice;
    ticket.booker = this.navService.user.name;
   ticket.pnr = Math.floor((Math.random() * 100) + 1)+ticket.from.substring(0,3).toUpperCase()+ticket.to.substring(0,3).toUpperCase();
    console.log(ticket);
   if(this.service.bookFlight(ticket)){
    console.log("Error");
    this.route.navigate(['./error']);
   return;
   }
   console.log("Success");
     this.msg.add({severity:'info', summary:"Ticket Booked ", detail:""});
    this.msgService.infoMsg("Ticket Booked ");
    console.log("Ticket Details => "+ticket);
    this.share.sendData(ticket);
    this.route.navigate(['./user/ticketDetails']);
  }

}
