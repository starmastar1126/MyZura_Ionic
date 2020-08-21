import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  rowWidth; any;
  rowHeight: any;
  constructor(
    public platfrom: Platform
  ) {}

  ngOnInit() {
    this.rowHeight = this.platfrom.height() + 'px';
    this.rowWidth = this.platfrom.width() + 'px';
  }

}
