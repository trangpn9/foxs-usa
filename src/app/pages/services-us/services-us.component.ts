import { Component, OnInit } from '@angular/core';
import { GetDataPageServiceService } from '../../services/get-data-page-service.service';

@Component({
  selector: 'app-services-us',
  templateUrl: './services-us.component.html',
  styleUrls: ['./services-us.component.scss']
})
export class ServicesUsComponent implements OnInit {

  data:any = '';

  constructor(private _getData: GetDataPageServiceService) { }

  ngOnInit() {    
    this._getData.getData().subscribe((data:any) => {
      this.data = [...data];      
    }, (err) => {
      console.log('ERRORS: ', err);
    });
  }

}
