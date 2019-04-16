import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit,OnChanges {
  @Input()type: string = 'text';
  @Input() placeholder: string = '';

  @ViewChild('inputElement') inputElement: ElementRef;
  @Input() value:any;
  @Output() valueChange:EventEmitter<any> = new EventEmitter();

  _sizeClass: string = '';
  @Input() 
  get size() {
    return this._sizeClass;
  }
  set size(val: string) {
    this._sizeClass = ' input-group-'+ val;
  }
  constructor(
  ) { }
  ngOnInit() {
    this.valueChange.emit('');
    document.querySelectorAll('.input-group-text').forEach((item:any) => {
      if(item.children.length==0) {
        item.parentNode.removeChild(item)
      }
    })
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes)
  }
  onModelChange(e: any) {
    this.value = e
    this.valueChange.emit(e);
  }
}
