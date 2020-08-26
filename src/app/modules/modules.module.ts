

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { UsersListComponent } from './admin/user/users-list/users-list.component';
import { ResolutionsListComponent } from './resolution/resolutions-list/resolutions-list.component';
import { ResolutionKategoryComponent } from './resolution/resolution-kategory/resolution-kategory.component';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ResolutionKategoryComponent,
    UsersListComponent,
    ResolutionsListComponent,
    ResolutionKategoryComponent,
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
