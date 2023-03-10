import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  exports:[
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class PagesModule { }
