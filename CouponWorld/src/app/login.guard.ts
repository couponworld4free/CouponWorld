import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AppServiceService} from './app-service.service';
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private appService:AppServiceService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.appService.getlogin()){
      return true;
    } else {
      return false;
    }
  }
}
