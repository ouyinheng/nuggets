import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(
    @Inject('home') private homeService,
    private router: Router
  ) { }
  title: any = [
    {title: '推荐', extensions: {query: {id: '21207e9ddb1de777adeaca7a2fb38030'}}},
    {title: '后端', _id: '5562b419e4b00c57d9b94ae2'},
    {title: '前端', _id: '5562b415e4b00c57d9b94ac8'},
    {title: 'Android', _id: '5562b410e4b00c57d9b94a92'},
    {title: 'IOS', _id: '5562b405e4b00c57d9b94a41'},
    {title: '人工智能', _id: '57be7c18128fe1005fa902de'},
    {title: '开发工具', _id: '5562b422e4b00c57d9b94b53'},
    {title: '代码人生', _id: '5c9c7cca1b117f3c60fee548'},
    {title: '阅读', _id: '5562b428e4b00c57d9b94b9d'}
  ];
  active: number = 0;
  ngOnInit() {
    this.homeService.getHomeRecom({
      extensions: this.title[0].extensions,
      operationName: '',
      query: '',
      variables: {first: 20, after: '', order: 'POPULAR'}
    });
  }
  serActive(active: number) {
    this.active = active;
  }
  goPost(id: string) {
    this.router.navigate(['main/home/post'], {
      queryParams: {
        id
      }
    })
  }
}
