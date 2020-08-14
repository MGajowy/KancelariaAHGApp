import { ResolutionComponent } from './resolution/resolution.component';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ResolutionComponent,
  ],
  imports: [
  CommonModule,
  AppRoutingModule,
  MatButtonModule,
  MatListModule
  ]
})
export class ModulesModule { }
