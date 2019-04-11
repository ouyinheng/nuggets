import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookMallService {
  constructor(private http: HttpClient) {}
  // 获取首页数据
  getHome = (params:any) => this.http.post(`/api/query`, params, {
    headers: {
      "X-Agent": "Juejin/Web"
    }
  })
}