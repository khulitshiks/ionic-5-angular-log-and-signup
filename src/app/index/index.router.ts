import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children:[{
      path:'',
      loadChildren:() => import('../pages/welcome/welcome.module').then (m => m.WelcomePageModule
      )
    },
    {
    path: '',
    component: IndexPage,
    children:[{
      path:'',
      loadChildren:() => import('../pages/login/login.module').then (m => m.loginPageModule
      )
    },
    {
    path: '',
    component: IndexPage,
    children:[{
      path:'',
      loadChildren:() => import('../pages/signup/signup.module').then (m => m.signupPageModule
      )
    }
    ]
  }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterRouter {}