import { ResetPasswordComponent } from './modules/admin/user/components/reset-password/reset-password.component';
import { SetPasswordComponent } from './modules/admin/user/components/set-password/set-password.component';
import { LogoutComponent } from './modules/logout/component/logout.component';
import { RegistrationComponent } from './modules/registration/component/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { LoginComponent } from './modules/login/component/login.component';



const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
  {
    path: 'kancelaria',
    loadChildren: () => import('./modules/modules.module').then (m => m.ModulesModule)
  }
]
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
    },
    {
      path: 'logout',
      component: LogoutComponent
    },
    {
      path: 'set-password',
      component: SetPasswordComponent
    },
    {
      path: 'reset-password',
      component: ResetPasswordComponent
    }
    // {
    //   path: 'logowanie',
    //   loadChildren: () => import('./fullwidth/fullwidth.module').then (m => m.FullwidthModule)
    // }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
