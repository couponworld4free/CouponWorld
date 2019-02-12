import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../../app-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private appService:AppServiceService) { }

  ngOnInit() {
  }
  register():void{
this.appService.setlogin(true);
  }
}
