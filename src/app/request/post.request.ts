import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostRequest {
  constructor(private http: HttpClient) {}
  userinfo: any;
  post: any;
  // 获取post数据
  getAnthur = (params: any) => this.http.get(`/post/getDetailData?uid=5b70e36ef265da280c718616&device_id=1555148364481&token=${params.token}&src=web&type=entry&postId=${params.id}`)
  getPost = (params: any) => this.http.get(`/post/getDetailData?uid=5b70e36ef265da280c718616&device_id=1555148364481&token=${params.token}&src=web&type=entryView&postId=${params.id}`)
}
