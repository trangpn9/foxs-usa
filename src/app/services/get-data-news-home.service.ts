import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from '../constants/init-api';

@Injectable({
  providedIn: 'root'
})
export class GetDataNewsHomeService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/posts?category=1`);
  }

  getDetailNewsById(id:any) {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/posts/${id}`);
  }
}
