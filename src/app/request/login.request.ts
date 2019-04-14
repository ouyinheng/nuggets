import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginRequest {
  constructor(private http: HttpClient) {}
  // 获取首页数据
  toLogin = (params: any) => this.http.post(`/login`, params, {
    headers: {
      'X-Agent': 'Juejin/Web'
    }
  })
}
