import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  username = '';
  constructor() { }

  ngOnInit() {
  }

  testClick() {
    console.log('click');
  }
}
