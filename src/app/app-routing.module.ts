import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitGuard } from './guards/exit.guard';
import { LoginSubrotasGuard } from './guards/login-subrotas.guard';
import { LoginGuard } from './guards/login.guard';
import { AccountComponent } from './pages/account/account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';

//Route -> Objeto que define uma rota
const routes: Routes = [
  // Objeto Route
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    canActivateChild: [LoginSubrotasGuard],
    canDeactivate:[ExitGuard],
    children: [
      {
        path:"",
        component: DashboardComponent
      },
      {
        path: "account/:name",
        component: AccountComponent
      }
    ]
  },
  {
    path: "**", //Rota coringa
    component: PageErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
