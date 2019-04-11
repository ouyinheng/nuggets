import { Component, OnInit, Inject } from '@angular/core';
import {BookMallService} from '../../../request/test.request'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    @Inject('test') private service,
    @Inject('util') private util,
    private request: BookMallService
  ) { }
  username:any='';
  params:any = {
    extensions: {query: {id: "21207e9ddb1de777adeaca7a2fb38030"}},
    operationName: "",
    query: "",
    variables: {first: 20, after: "", order: "POPULAR"}
  }
  ngOnInit() {
    this.service.showTitle();
    let str = this.util.format('2019-04-11T02:39:00.247Z', '2019-04-11T07:40:59.017Z');
    console.log(str)
  }
  submit() {
    this.request.getHome(this.params).subscribe((res:any) => {
      console.log(res);
    }, (err:any) => {
      console.log(err)
    })
  }
}
