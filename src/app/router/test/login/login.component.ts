import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(@Inject('test') private service) { }
  username:any='';

  ngOnInit() {
    this.service.showTitle()
  }
  submit() {
    console.log(this.username)
  }
}
