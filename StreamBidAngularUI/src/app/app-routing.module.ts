import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth/auth.guard';



const routes : Routes =[
  {
    path:"",
    component:DashboardComponent,
    pathMatch:"full"
 //   canActivate:[AuthGuard]
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
