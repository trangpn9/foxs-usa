import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GetDataNewsHomeService } from './../../services/get-data-news-home.service';

@Component({
  selector: 'app-special-products',
  templateUrl: './special-products.component.html',
  styleUrls: ['./special-products.component.scss']
})
export class SpecialProductsComponent implements OnInit {

  data:any = '';

  customOptions: OwlOptions = {
    loop: true,    
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplaySpeed: 300,    
    navText: ['<img src="../../../assets/images/icon-pre.png" alt="icon previous" />', '<img src="../../../assets/images/icon-next.png" alt="icon next" />'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    autoplay: true,
    nav: false
  }

  constructor(private _getData: GetDataNewsHomeService) { }

  ngOnInit() {
    this._getData.getDataSpecial().subscribe((data:any) => {
      this.data = [...data];      
    }, (err) => {
      console.log('ERRORS: ', err);
    });
  }

}
