import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Utils {
  constructor() { }
  format(date1:any,date2:any) {
    let start:any = new Date(date1);
    let end:any = new Date(date2);
    let distance:any = (end-start)/1000;
    if(distance<3600) {
      distance = distance/60;
      return `${parseInt(distance)}分钟前`
    } else if(distance>3600&&distance<3600*24) {
        distance = distance/60/60;
      return `${parseInt(distance)}小时前`
    } else if(distance>=3600*24&&distance<3600*24*30) {
      distance = distance/60/60/24;
      return `${parseInt(distance)}天前`
    }
  }
}