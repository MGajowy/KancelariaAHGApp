
import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { ResolutionKategoryComponent } from './modules/resolution/resolution-kategory/resolution-kategory.component';
import { UsersListComponent } from './modules/admin/user/users-list/users-list.component';


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
  path: 'kategory-resolutions',
  component: ResolutionKategoryComponent
},
{
  path: 'user-list',
  component: UsersListComponent,
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
