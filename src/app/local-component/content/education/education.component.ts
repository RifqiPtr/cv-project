import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TopNotchComponent } from '../../top-notch/top-notch.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    TopNotchComponent
  ],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

}
