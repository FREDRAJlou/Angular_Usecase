import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/nested/services/flight.service';

@Component({
  selector: 'app-manage-discounts',
  templateUrl: './manage-discounts.component.html',
  styleUrls: ['./manage-discounts.component.scss']
})
export class ManageDiscountsComponent implements OnInit {
  discounts:any=[];
  constructor(private route : Router,public service : FlightService) { }

  ngOnInit(): void {
    this.service.getDiscounts('?').subscribe(data=>{
      this.discounts=data;
      console.log(this.discounts);
    });
  }

  addDiscount(){
    this.discounts.push({});
  }

  saveDiscount(flight:any){
    this.service.updateFlight(flight);
  }
}
