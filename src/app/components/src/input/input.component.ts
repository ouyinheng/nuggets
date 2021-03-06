import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnChanges {
  @Input()type = 'text';
  @Input() placeholder = '';
  _value: string|number;
  @ViewChild('inputElement') inputElement: ElementRef;
  @Input()
  get value() {
    return this._value;
  }
  set value(val: string | number) {
    this._value = val;
  }
  @Output() valueChange:EventEmitter<any> = new EventEmitter();

  _sizeClass = '';
  @Input()
  get size() {
    return this._sizeClass;
  }
  set size(val: string) {
    this._sizeClass = ' input-group-' + val;
  }
  constructor(
  ) { }
  ngOnInit() {
    this.valueChange.emit('');
    const dom: any = document.querySelectorAll('.input-group-text');
    dom.forEach((item: any) => {
      if (item.children.length === 0) {
        item.parentNode.removeChild(item);
      }
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes)
  }
  onModelChange(e: any) {
    this.value = e;
    this.valueChange.emit(e);
  }
}
