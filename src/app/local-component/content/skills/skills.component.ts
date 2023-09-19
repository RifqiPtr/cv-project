import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TopNotchComponent } from '../../top-notch/top-notch.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    TopNotchComponent
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

}
