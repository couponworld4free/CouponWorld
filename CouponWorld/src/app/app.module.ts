import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AppServiceService} from './app-service.service';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import {LoginGuard} from './login.guard';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home' , component:HomeComponent},
      {path:'register' , component:RegisterComponent},
      {path:'login' , component:LoginComponent,canActivate:[LoginGuard]},
      {path:'about',component:AboutComponent},
      {path:'**',component:ErrorComponent}
    ])
  ],
  providers: [AppServiceService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
