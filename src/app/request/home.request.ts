import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeRequest {
  constructor(private http: HttpClient) {}
  // 获取首页数据
  getRecom = (params: any) => this.http.post(`/api/query`, params, {
    headers: {
      'X-Agent': 'Juejin/Web'
    }
  })
}
