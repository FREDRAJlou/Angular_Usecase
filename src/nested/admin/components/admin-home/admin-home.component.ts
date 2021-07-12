import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/nested/services/navigation.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private route : Router, private navService: NavigationService) { 
  }

  ngOnInit(): void {
    this.navService.setAdminNavigation();
  }

}
