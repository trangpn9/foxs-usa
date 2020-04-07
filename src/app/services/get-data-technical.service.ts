import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from '../constants/init-api';

@Injectable({
  providedIn: 'root'
})
export class GetDataTechnicalService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/day_chuyen_san_xuat?_embed`);
  }

  getDetailTechnicalById(id:any) {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/day_chuyen_san_xuat/${id}`);
  }
}
