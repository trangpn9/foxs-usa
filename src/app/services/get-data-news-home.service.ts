import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from '../constants/init-api';

@Injectable({
  providedIn: 'root'
})
export class GetDataNewsHomeService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/posts?categories=1&per_page=4&_embed`);
  }

  getFullData() {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/posts?categories=1&_embed`);
  }

  getDataSpecial() {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/posts?categories=4&per_page=8&_embed`);
  }

  getDetailNewsById(id:any) {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/posts/${id}`);
  }
}
