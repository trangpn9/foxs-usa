import { Component, OnInit } from '@angular/core';
import { GetDataRecruitmentService } from './../../../services/get-data-recruitment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recruitment-detail',
  templateUrl: './recruitment-detail.component.html',
  styleUrls: ['./recruitment-detail.component.scss']
})
export class RecruitmentDetailComponent implements OnInit {

  title:any = '';
  content:any = ''; 

  constructor(
    private _getDataDetail: GetDataRecruitmentService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let idRecruitment = '';
    this.activatedRoute.params.subscribe(params => {
      idRecruitment = params['id'];
    });
    this._getDataDetail.getDetailRecruitmentById(idRecruitment).subscribe((data:any) => {
      const { content, title } = data;
      this.title = title;
      this.content = content;
    }, (err) => {
      console.log('ERRORS: ', err);
    });
  }

}
