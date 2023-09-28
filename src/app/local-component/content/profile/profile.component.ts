import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TopNotchComponent } from '../../top-notch/top-notch.component';
import { profileData } from './profile-services/profile-data';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    TopNotchComponent,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    BrowserAnimationsModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  dataProfile = profileData;
  isContactlist: boolean = false;

  constructor() {}

  onContactMe() {
    this.isContactlist = !this.isContactlist;
  }
}
