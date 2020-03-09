import { Component, OnInit } from '@angular/core';
import { ScrollAutoService } from './services/scroll-auto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'foxs-usa';

  constructor(
    private _scrollService: ScrollAutoService
  ) {}

  ngOnInit() {
    this._scrollService.setScrollTop();
  }
}
