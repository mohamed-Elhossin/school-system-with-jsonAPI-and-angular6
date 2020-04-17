import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpcreateComponent } from './emp/empcreate/empcreate.component';
import { EmplistComponent } from './emp/emplist/emplist.component';
import { EmpeditComponent } from './emp/empedit/empedit.component';
import { HttpClientModule } from "@angular/common/http";
import {  FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NavBarOfEmpComponent } from './nav-bar-of-emp/nav-bar-of-emp.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PagenonfoundComponent } from './pagenonfound/pagenonfound.component';
import { NavBarOfStudentComponent } from './student/nav-bar-of-student/nav-bar-of-student.component';
import { CreateStudComponent } from './student/create-stud/create-stud.component';
import { ListStudComponent } from './student/list-stud/list-stud.component';
import { EditStudComponent } from './student/edit-stud/edit-stud.component';
import { LoginComponent } from './student/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    EmpcreateComponent,
    EmplistComponent,
    EmpeditComponent,
    NavBarOfEmpComponent,
    HomePageComponent,
    PagenonfoundComponent,
    NavBarOfStudentComponent,
    CreateStudComponent,
    ListStudComponent,
    EditStudComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
