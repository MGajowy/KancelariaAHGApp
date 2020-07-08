import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './../../modules/about/about.component';
import { HomeComponent } from './../../modules/home/home.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule

  ]
})
export class DefaultModule { }
