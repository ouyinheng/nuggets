import { Injectable } from '@angular/core';
import { PostRequest } from '../request/post.request';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private $http: PostRequest
  ) { }
  userinfo: any;
  post: any;
  // 获取post数据
  getAnthur = (params: any) => this.$http.getAnthur(params).subscribe((res: any) => {
    this.userinfo = res;
    console.log('userinfo res', res)
  },(err: any) => {
    console.log('err', err)
  })
  getPost = (params: any) => this.$http.getPost(params).subscribe((res: any) => {
    this.post = res;
    console.log('post res', res)
  },(err: any) => {
    console.log('err', err)
  }) 

}
