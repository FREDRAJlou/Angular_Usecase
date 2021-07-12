import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NavigationService } from 'src/nested/services/navigation.service';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.scss']
})
export class AdminNavBarComponent implements OnInit {

  items: MenuItem[];
  constructor(private service: NavigationService) {
     this.items=[];
   }


  ngOnInit() {
      this.items = this.service.userItems;
}

}
