import { ResetPasswordComponent } from './../../modules/admin/user/components/reset-password/reset-password.component';
import { LogoutComponent } from './../../modules/logout/component/logout.component';

import { RegistrationComponent } from './../../modules/registration/component/registration.component';
import { LoginComponent } from './../../modules/login/component/login.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FullwidthComponent } from './fullwidth.component';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatSelectModule} from '@angular/material/select';
import { SetPasswordComponent } from 'src/app/modules/admin/user/components/set-password/set-password.component';



@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent,
    RegistrationComponent,
    LogoutComponent,
    SetPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSelectModule
  ]
})
export class FullwidthModule { }
