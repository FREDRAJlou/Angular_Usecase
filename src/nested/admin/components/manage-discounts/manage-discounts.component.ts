import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/nested/services/flight.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manage-discounts',
  templateUrl: './manage-discounts.component.html',
  styleUrls: ['./manage-discounts.component.scss']
})
export class ManageDiscountsComponent implements OnInit {
  discounts:any=[];
  constructor(private msgService:MessageService,private route : Router,public service : FlightService) { }

  ngOnInit(): void {
    this.service.getDiscounts('getDiscounts').subscribe(data=>{
      this.discounts=data;
      console.log(this.discounts);
    });
  }

  addDiscount(){
    this.discounts.push({id:'',code:'',discount:''});

  }

  validateDiscount(discount:any){
    if(discount?.code===""){
      console.log('throeing');
      this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Discount Code required"});
      return true;
    }else if(discount?.discount===""){
      this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Discount Percentage required"});
      return true;
    }
    return false;
  }

  saveDiscount(discount:any){
    if(this.validateDiscount(discount))
    return;
    this.service.saveDiscount(discount);
    this.msgService.add({severity:'success', summary:'Discount data Saved', detail:""});
    this.service.getDiscounts('getDiscounts').subscribe(data=>{
      this.discounts=data;
      console.log(this.discounts);
    });
  }
}
