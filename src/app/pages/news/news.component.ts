import { Component, OnInit } from '@angular/core';
import { GetDataNewsHomeService } from './../../services/get-data-news-home.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  data:any = '';

  constructor(private _getData: GetDataNewsHomeService) { }

  ngOnInit() {
    this._getData.getFullData().subscribe((data:any) => {
      this.data = [...data];          
    }, (err) => {
      console.log('ERRORS: ', err);
    });    
  }

}
