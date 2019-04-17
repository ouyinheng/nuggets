import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  $splitbutton = false;
  @Input('split-button')
  get splitbutton() {
    return this.$splitbutton;
  }
  set splitbutton(val: any) {
    const bool = JSON.stringify(val);
    this.$splitbutton = bool === 'false' ? false : true;
  }
  toggles = false;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.toggles = !this.toggles;
  }
  test() {
    console.log('this is test');
  }
}
