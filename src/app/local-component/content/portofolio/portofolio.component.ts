import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TopNotchComponent } from '../../top-notch/top-notch.component';

@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    TopNotchComponent
  ],
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.scss']
})
export class PortofolioComponent {

}
