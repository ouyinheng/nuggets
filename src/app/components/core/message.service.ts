import { Injectable, Input } from '@angular/core';
import { MessageComponent } from '../src/message/message.component';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() {
  }
  alert(cls: string, msg: string, options?: {}) {
    const div = document.createElement('div');
    div.innerHTML = `<div class="alert alert-${cls}" role="alert">
      ${msg || ''}
    </div>`;
    div.style.cssText = 'position:absolute;zIndex:1000;top:10px;left:10px;right:10px;transition:all 1s';
    document.body.appendChild(div);
    setTimeout(() => {
      div.style.opacity = '0';
    }, 2000);
    setTimeout(() => {
      document.body.removeChild(div);
    }, 3000);
  }
  public success(msg: string) {
    this.alert('success', msg);
  }
  public error(msg: string) {
    this.alert('danger', msg);
  }
  public info(msg: string) {
    this.alert('info', msg);
  }
  public warning(msg: string) {
    this.alert('warning', msg);
  }
}
