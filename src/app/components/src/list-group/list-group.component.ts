import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {

  $flush = false;
  @Input()
  get flush() {
    return this.$flush;
  }
  set flush(val: any) {
    const bool = JSON.stringify(val);
    this.$flush = bool === 'false' ? false : true;
  }
  constructor() { }

  ngOnInit() {
  }

}
