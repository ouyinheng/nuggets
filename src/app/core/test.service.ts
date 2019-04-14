import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  static showTitle() {
    console.log('hello world');
  }
}
