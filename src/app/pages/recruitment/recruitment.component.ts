import { Component, OnInit } from '@angular/core';
import { GetDataRecruitmentService } from './../../services/get-data-recruitment.service';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})
export class RecruitmentComponent implements OnInit {

  data:any = '';

  constructor(private _getData: GetDataRecruitmentService) { }

  ngOnInit() {
    this._getData.getData().subscribe((data:any) => {
      this.data = [...data];                
    }, (err) => {
      console.log('ERRORS: ', err);
    });      
  }

}
