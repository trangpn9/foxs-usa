import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from '../constants/init-api';

@Injectable({
  providedIn: 'root'
})
export class GetDataRecruitmentService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/posts?categories=2&_embed`);
  }

  getDetailRecruitmentById(id:any) {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/posts/${id}`);
  }
}
