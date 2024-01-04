import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { Error404PageComponent } from './error-404-page/error-404-page.component';
import { HomeComponent } from './home/home.component';
import { authgurdGuard } from './authgurd.guard';

const routes: Routes = [
  {path:'', redirectTo: 'login',pathMatch:'full'},
  {path: 'login', component:LoginPageComponent},
  {path: 'register', component:RegisterPageComponent},
  {path: 'home', component:HomeComponent,canActivate:[authgurdGuard]},
  {path:'**', component:Error404PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
