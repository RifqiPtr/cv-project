import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopNotchComponent } from '../top-notch/top-notch.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-on-board',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    TopNotchComponent,
    MatButtonModule
  ],
  templateUrl: './on-board.component.html',
  styleUrls: ['./on-board.component.scss']
})
export class OnBoardComponent implements OnInit{
  
  constructor() {}
  ngOnInit() {}

}
