import { Component, OnInit, Input } from '@angular/core';
import { Ripple } from '../../utils/ripple'
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  private _class = 'btn';
  private _plain = '';
  private _size = '';//按钮默认大小
  private _disabled = false;
  private _start = 'btn'
  types:Array<string> = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'link'];
  constructor() { }
  @Input()
  set type(type: string) {
    if(this.types.includes(type))
      this._class = type;
  }
  @Input()
  set plain(plain: boolean) {
    let _plain = JSON.stringify(plain);
    if(_plain !== "false") {
      this._plain = 'outline-';
    }
  }
  @Input()
  set size(size: string) {
    this._class += ' btn-'+size;
  }
  @Input()
  set disabled(disabled: boolean) {
    let _disabled = JSON.stringify(disabled);
    this._disabled = _disabled=='false'?false:true;
  }
  ngOnInit() {
  }

  setRipple() {
    
  }
}
