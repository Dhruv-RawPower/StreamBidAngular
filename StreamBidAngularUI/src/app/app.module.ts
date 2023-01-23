import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthInterceptor } from './services/auth/auth.intercept';
import { LoginService } from './services/login/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { AuthGuard } from './services/auth/auth.guard';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterService } from './services/register/register.service';
import { RegisterComponent } from './components/register/register.component';
import { DashboardService } from './services/dashboard/dashboard.service';
import { MessageService } from './services/messages/message.service';
import { MessageComponent } from './components/message/message.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    RegisterComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    MatDividerModule,
    FontAwesomeModule 

  ],
  providers: [LoginService, DashboardService, MessageService, RegisterService, AuthGuard,[{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
