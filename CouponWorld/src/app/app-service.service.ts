import { Injectable } from '@angular/core';
import {envi} from '../environments/environment';
@Injectable()
export class AppServiceService {
protected Url=envi.url;
  constructor() {
   }

}
