import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from '../../constants/init-api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  data:any = '';
  content_short:any = '';

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(`${AppSetting.API_SERVICE}wp/v2/posts/26`).subscribe((data) => {
      this.data = {...data};
      this.content_short = this.data.content.rendered;      
    }, (err) => {
      console.log(err);
    });
  }

}
