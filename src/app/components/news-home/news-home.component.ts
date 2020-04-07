import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GetDataNewsHomeService } from './../../services/get-data-news-home.service';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent implements OnInit {

  data:any = '';

  customOptions: OwlOptions = {
    loop: true,    
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<img src="../../../assets/images/icon-pre.png" alt="icon previous" />', '<img src="../../../assets/images/icon-next.png" alt="icon next" />'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }


  constructor(private _getData: GetDataNewsHomeService) { }

  ngOnInit() {
    this._getData.getData().subscribe((data:any) => {
      this.data = [...data];      
    }, (err) => {
      console.log('ERRORS: ', err);
    });
  }

}
