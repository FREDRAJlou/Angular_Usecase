import { Component,ElementRef,Input, OnInit, ViewChild } from '@angular/core';
import { ShareableDataService } from 'src/app/services/shareable-data.service';
import  jsPDF from 'jspdf'; 
import 'jspdf-autotable'; 
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import pdfMake from 'pdfmake/build/pdfMake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {

  ticket : any;


  constructor(private http: HttpClient,private service:ShareableDataService) { 
  }

  ngOnInit(): void {
    this.ticket = this.service.transferObject.getValue();
    this.service.msg.subscribe(data => {
      this.ticket = data;
      console.log("From  details obs"+data);
    });
    console.log("From  details"+this.ticket.flight);
  }

  public exportHtmlToPDF(){
    let data : any = document.getElementById('content');
      
      html2canvas(data).then(canvas => {
        console.log(data);
          
          let docWidth = 208;
          let docHeight = canvas.height * docWidth / canvas.width;
          
          const contentDataURL = canvas.toDataURL('image/png')
          let doc = new jsPDF('p', 'mm', 'a4');
          let position = 0;
          doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
          
          doc.save('TicketDetails-'+this.ticket.date+'.pdf');
      });
    }
  
}
