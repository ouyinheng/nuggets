import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: LoginService
  ) { }
  username: String = '';
  password: String = '';
  ngOnInit() {
  }
  toBack() {
    history.back();
  }
  toLogin() {
    console.log(this.username, this.password);
    this.service.login({
      phoneNumber: this.username,
      password: this.password
    });
  }
}
