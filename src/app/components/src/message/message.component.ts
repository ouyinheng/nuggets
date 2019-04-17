import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  $class = {
    alert: true
  };
  @Input()
  set type(val: string) {
    this.$class = {
      alert: true,
      ['alert-' + val]: true
    };
  }
  constructor() { }

  ngOnInit() {
  }

}
