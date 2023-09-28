import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navbarData } from './navbar-services/navbar-data';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logoImage: string = 'assets/images/navbar/logo-image.png';
  iconNavigation: string = '';
  dataNavbar = navbarData;
  isClick: boolean = false  ;

  constructor() {}

  ngOnInit() {}

  onClickLogo() {
    this.isClick = !this.isClick;
  }

  onClickNavigation() {
    this.isClick = false;
  }
}
