import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(private msgService: MessageService) { }

  warningMsg(msg:string){
    this.msgService.add({severity:'warning', summary:msg, detail:""});
  }
 successMsg(msg:string){
    this.msgService.add({severity:'success', summary:msg, detail:""});
  }
  infoMsg(msg:string){
    this.msgService.add({severity:'info', summary:msg, detail:""});
  }
 errorMsg(msg:string){
    this.msgService.add({severity:'error', summary:msg, detail:""});
  }
}
