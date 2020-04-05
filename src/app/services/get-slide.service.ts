import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from '../constants/init-api';

@Injectable({
  providedIn: 'root'
})
export class GetSlideService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/slide?_embed`);
  }
}
