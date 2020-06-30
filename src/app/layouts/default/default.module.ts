import { RouterModule } from '@angular/router';
import { AboutComponent } from './../../modules/about/about.component';
import { HomeComponent } from './../../modules/home/home.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class DefaultModule { }
