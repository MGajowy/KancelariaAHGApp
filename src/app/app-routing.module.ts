import { UserComponent } from './modules/admin/user/user.component';
import { ResolutionComponent } from './modules/resolution/resolution.component';
import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { RegistrationComponent } from './modules/registration/registration.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./modules/modules.module').then (m => m.ModulesModule)
  // },
  {
  path: 'about',
  component: AboutComponent
},
{
  path: 'resolutions',
  component: ResolutionComponent
},
{
  path: 'user',
  component: UserComponent
}]
}, {
  path: '',
  component: FullwidthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'registration',
      component: RegistrationComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
