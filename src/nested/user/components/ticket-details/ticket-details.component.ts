import { Component,Input, OnInit } from '@angular/core';
import { ShareableDataService } from 'src/app/services/shareable-data.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {

  @Input()
  ticket : any;
  constructor(private service:ShareableDataService) { }

  ngOnInit(): void {
    this.ticket = this.service.transferObject.getValue();
    this.service.msg.subscribe(data => {
      this.ticket = data;
      console.log("From  details obs"+data);
    });
    console.log("From  details"+this.ticket.flight);
  }

}
