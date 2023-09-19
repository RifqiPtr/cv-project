import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TopNotchComponent } from '../../top-notch/top-notch.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    TopNotchComponent
  ],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

}
