import { Injectable } from '@angular/core';
import {LoginRequest } from '../request/login.request';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: LoginRequest
  ) { }
  userinfo: any;
  login(params: Object) {
    this.http.toLogin(params).subscribe((res: any) => {
      console.log('res', res);
      this.userinfo = res;
      localStorage.userinfo = JSON.stringify(res);
      history.back();
    }, (err: any) => {
      console.log('err', err);
    });
  }
}
