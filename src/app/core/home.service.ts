import { Injectable } from '@angular/core';
import { HomeRequest } from '../request/home.request';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(
    private $http: HomeRequest
  ) { }
  postData: any;
  getHomeRecom(params: any) {
    if (this.postData) {
      return;
    }
    this.$http.getRecom(params).subscribe((res: any) => {
      console.log('res', res);
      this.postData = res;
    }, (err: any) => {
      console.log('err', err);
    });
  }
}
