import { Component, OnInit } from '@angular/core';
import { GetDataAboutUsService } from '../../services/get-data-about-us.service'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  data:any = '';
  content:any = '';

  constructor(private _getData: GetDataAboutUsService) { }

  ngOnInit() {
    this._getData.getData().subscribe((data: any) => {
      this.data = {...data};
      this.content = this.data.content.rendered;
    }, (err) => {
      console.log('ERRORS: ', err);
    });
  }

}
