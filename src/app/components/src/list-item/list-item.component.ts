import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  $active = false;
  $disabled = false;
  $type = false;
  $types = '';
  $action = false;
  $class: any = {};
  @Input() tip: string | number;
  @Input()
  get active() {
    return this.$active;
  }
  set active(val: any) {
    const bool = JSON.stringify(val);
    this.$active = bool === 'false' ? false : true;
    this.setClass();
  }
  @Input()
  get disabled() {
    return this.$disabled;
  }
  set disabled(val: any) {
    const bool = JSON.stringify(val);
    this.$disabled = bool === 'false' ? false : true;
    this.setClass();
  }
  @Input()
  set type(val: any) {
    if (val) {
      this.$type = true;
      this.$types = val;
    }
  }
  @Input()
  set action(val: any) {
    const bool = JSON.stringify(val);
    this.$action = bool === 'false' ? false : true;
  }
  constructor() { }
  setClass() {
    this.$class = {
      'list-group-item': true,
      active: this.$active,
      disabled: this.$disabled,
      'list-group-item-action': this.$action,
      ['list-group-item-' + this.$types]: true,
      ' d-flex justify-content-between align-items-center': !!this.tip
    };
  }
  ngOnInit() {
    this.setClass();
  }

}
