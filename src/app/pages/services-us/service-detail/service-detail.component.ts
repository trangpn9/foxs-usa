import { Component, OnInit } from '@angular/core';
import { GetDataPageServiceService } from './../../../services/get-data-page-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
  
  title:any = '';
  content:any = '';

  constructor(
    private _getDataDetail:GetDataPageServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {    
    let idService = '';
    this.activatedRoute.params.subscribe(params => {
      idService = params['id'];
    });    
    this._getDataDetail.getDetailServiceById(idService).subscribe((data:any) => {      
      const { content, title } = data;       
      this.title = title;
      this.content = content;
    }, (err) => {
      console.log('ERRORS: ', err)
    });
  }

}
