import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slide-customer',
  templateUrl: './slide-customer.component.html',
  styleUrls: ['./slide-customer.component.css']
})
export class SlideCustomerComponent implements OnInit {

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
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit() {
  }

}
