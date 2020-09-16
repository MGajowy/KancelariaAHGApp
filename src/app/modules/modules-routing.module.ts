import { AuthGuardService } from './../core/services/guard/auth-guard.service';
import { AddResolutionCategoryComponent } from './resolution/component/add-resolution-category/add-resolution-category.component';
import { RegulationListComponent } from './regulation/component/regulation-list/regulation-list.component';
import { RegulationCategoryComponent } from './regulation/component/regulation-category/regulation-category.component';
import { EventLogComponent } from './admin/configuration-comp/monitoring/event-log/event-log.component';
import { AddUserComponent } from './admin/user/components/add-user/add-user.component';
import { UsersListComponent } from './admin/user/components/users-list/users-list.component';
import { ResolutionKategoryComponent } from './resolution/component/resolution-category/resolution-kategory.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolutionsListComponent } from './resolution/component/resolutions-list/resolutions-list.component';
import { UserDetailsComponent } from './admin/user/components/user-details/user-details.component';
import { AuthServiceService } from '../core/services/auth/auth-service.service';
import { UpdateUserComponent } from './admin/user/components/update-user/update-user.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'event-log',
    component: EventLogComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'category-resolutions',
    component: ResolutionKategoryComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-category-resolutions',
    component: AddResolutionCategoryComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'list-resolutions',
    component: ResolutionsListComponent
  },
  {
    path: 'category-regulations',
    component: RegulationCategoryComponent
  },
  {
    path: 'list-regulations',
    component: RegulationListComponent
  },
  {
    path: 'user-list',
    component: UsersListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'user-detail/:id',
    component: UserDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'update-user/:id',
    component: UpdateUserComponent,
    canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModulesRoutingModule { }
