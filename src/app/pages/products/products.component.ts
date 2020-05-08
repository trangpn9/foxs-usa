import { Component, OnInit } from '@angular/core';
import { GetDataNewsHomeService } from './../../services/get-data-news-home.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  data:any = '';

  constructor(private _getData: GetDataNewsHomeService) { }

  ngOnInit() {
    this._getData.getDataProductsAll().subscribe((data:any) => {
      this.data = [...data];          
    }, (err) => {
      console.log('ERRORS: ', err);
    }); 
  }

}
