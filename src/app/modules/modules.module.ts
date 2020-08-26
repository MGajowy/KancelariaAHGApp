import { ResolutionComponent } from './resolution/resolution.component';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { UserComponent } from './admin/user/user.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ResolutionComponent,
    UserComponent,
  ],
  imports: [
  CommonModule,
  AppRoutingModule,
  MatButtonModule,
  MatListModule,
  MatExpansionModule,
  MatIconModule,
  MatDividerModule
  ]
})
export class ModulesModule { }
