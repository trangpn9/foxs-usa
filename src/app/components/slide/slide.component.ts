import { Component, OnInit } from '@angular/core';
import { GetSlideService } from './../../services/get-slide.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  data:any = '';

  constructor(private _getData: GetSlideService) { }

  ngOnInit() {
    this._getData.getData().subscribe((data:any) => {
      this.data = [...data];      
    }, (err) => {
      console.log('ERRORS: ', err);
    });
  }

}
