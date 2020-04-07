import { Component, OnInit } from '@angular/core';
import { GetDataNewsHomeService } from './../../../services/get-data-news-home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss']
})
export class NewDetailComponent implements OnInit {

  title:any = '';
  content:any = ''; 

  constructor(
    private _getDataDetail: GetDataNewsHomeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let idNews = '';
    this.activatedRoute.params.subscribe(params => {
      idNews = params['id'];
    });
    this._getDataDetail.getDetailNewsById(idNews).subscribe((data:any) => {
      const { content, title } = data;
      this.title = title;
      this.content = content;
    }, (err) => {
      console.log('ERRORS: ', err);
    });
  }

}
