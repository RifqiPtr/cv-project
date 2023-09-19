import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { OnBoardComponent } from '../on-board/on-board.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-top-notch',
  standalone: true,
  imports: [
    CommonModule,
    OnBoardComponent,
    MatIconModule
  ],
  providers: [
    DatePipe
  ],
  templateUrl: './top-notch.component.html',
  styleUrls: ['./top-notch.component.scss']
})
export class TopNotchComponent implements OnInit{
  deviceTime: Date = new Date;
  date: string | null = null;
  day: string | null = null;
  second: string = '00';
  hour: string = '00';
  minute: string = '00';

  constructor(
    private datePipe: DatePipe
  ) {}
  ngOnInit() {
    this.timerFetch();
  }

  timerFetch() {
    /* Repeater for get time by device time */
    setInterval(()=>{
      const date = new Date;
      this.clockUpdater(date);
    },1000);
    
    this.date = this.datePipe.transform(this.deviceTime, 'fullDate');
  }

  clockUpdater(date: Date) {
    const hour = date.getHours();
    this.hour = hour < 10 ? '0' + hour : hour.toString();

    const minute = date.getMinutes();
    this.minute = minute < 10 ? '0' + minute : minute.toString();

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
  }
}
