import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthGuard } from './services/auth/auth.guard';



const routes : Routes =[
  {
    path:"",
    component:DashboardComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"register",
    component:RegisterComponent,
    pathMatch:"full"
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]
  },
  {
    path:"messages",
    component:MessageComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
