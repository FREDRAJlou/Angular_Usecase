import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'user-navbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.scss']
})
export class UserNavbarComponent implements OnInit {
   items: MenuItem[];
  constructor(private service: NavigationService) {
     this.items=[];
   }


  ngOnInit() {
      this.items = this.service.userItems;
}
}
