import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth/auth.service';



const routes : Routes =[
  {
    path:"",
    component:DashboardComponent,
    pathMatch:"full"
    //canActivate:[AuthService]
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
