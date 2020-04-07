import { Component, OnInit } from '@angular/core';
import { GetDataTechnicalService } from './../../../services/get-data-technical.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technical-detail',
  templateUrl: './technical-detail.component.html',
  styleUrls: ['./technical-detail.component.scss']
})
export class TechnicalDetailComponent implements OnInit {

  title:any = '';
  content:any = ''; 

  constructor(
    private _getDataDetail: GetDataTechnicalService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let idTechnical = '';
    this.activatedRoute.params.subscribe(params => {
      idTechnical = params['id'];
    });
    this._getDataDetail.getDetailTechnicalById(idTechnical).subscribe((data:any) => {
      const { content, title } = data;
      this.title = title;
      this.content = content;
    }, (err) => {
      console.log('ERRORS: ', err);
    });
  }

}
