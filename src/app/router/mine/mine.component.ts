import {Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {

  constructor(
    @Inject('userinfo') public services,
    private router: Router
  ) { }
  myColor: String = 'red';
  ngOnInit() {
    const userinfo: any = JSON.parse(localStorage.userinfo);
    if (userinfo) {
      this.services.userinfo = userinfo;
    }
  }
  toLogin() {
    this.router.navigate(['login']);
  }
}
