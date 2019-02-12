import { Injectable } from '@angular/core';
import {envi} from '../environments/environment';
@Injectable()
export class AppServiceService {
protected Url=envi.url;
  constructor() {
   }
protected registered:Boolean=false;

setlogin(value:Boolean):void{
this.registered=value;
}
getlogin():Boolean{
  return this.registered;
}

}
