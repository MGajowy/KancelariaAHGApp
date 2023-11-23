import { DetailsCategoryComponent } from './resolution/component/details-category/details-category.component';
import { ModifyCategoryComponent } from './resolution/component/modify-category/modify-category.component';
import { AuthGuardService } from './../core/services/guard/auth-guard.service';
import { AddResolutionCategoryComponent } from './resolution/component/add-resolution-category/add-resolution-category.component';
import { RegulationListComponent } from './regulation/component/regulation-list/regulation-list.component';
import { RegulationCategoryComponent } from './regulation/component/regulation-category/regulation-category.component';
import { EventLogComponent } from './admin/event-log/component/event-log.component';
import { AddUserComponent } from './admin/user/components/add-user/add-user.component';
import { UsersListComponent } from './admin/user/components/users-list/users-list.component';
import { ResolutionCategoryComponent } from './resolution/component/resolution-category/resolution-category.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolutionsListComponent } from './resolution/component/resolutions-list/resolutions-list.component';
import { UserDetailsComponent } from './admin/user/components/user-details/user-details.component';
import { AuthServiceService } from '../core/services/auth/auth-service.service';
import { UpdateUserComponent } from './admin/user/components/update-user/update-user.component';
import { AddResolutionComponent } from './resolution/component/add-resolution/add-resolution.component';
import { AddRegulationCategoryComponent } from './regulation/component/add-regulation-category/add-regulation-category.component';
import { AddRegulationComponent } from './regulation/component/add-regulation/add-regulation.component';
import { DetailsRegulationCategoryComponent } from './regulation/component/details-regulation-category/details-regulation-category.component';
import { ModifyRegulationCategoryComponent } from './regulation/component/modify-regulation-category/modify-regulation-category.component';
import { AccessMapComponent } from './about/access-map/access-map.component';
import { SpecializationComponent } from './about/specialization/specialization.component';
import { OnlineHelpComponent } from './about/online-help/online-help.component';
import { CareerComponent } from './about/career/career.component';
import { ModifyResolutionComponent } from './resolution/component/modify-resolution/modify-resolution.component';
import { ReputationListComponent } from './reputation/component/reputation-list/reputation-list.component';
import { DocumentClientListComponent } from './document/component/document-client-list/document-client-list.component';
import { DocumentListComponent } from './document/component/document-list/document-list.component';
import { UpdateDocumentComponent } from './document/component/update-document/update-document.component';
import { AddOrderComponent } from './admin/order/component/add-order/add-order.component';
import { OrdersListComponent } from './admin/order/component/orders-list/orders-list.component';
import { ModifyOrderComponent } from './admin/order/component/modify-order/modify-order.component';

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
    component: EventLogComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'category-resolutions',
    component: ResolutionCategoryComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-category-resolutions',
    component: AddResolutionCategoryComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-resolutions',
    component: AddResolutionComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'modify-resolutions/:id',
    component: ModifyResolutionComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'category-detail/:id',
    component: DetailsCategoryComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'modify-category/:id',
    component: ModifyCategoryComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'list-resolutions',
    component: ResolutionsListComponent
  },
  {
    path: 'category-regulations',
    component: RegulationCategoryComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-category-regulations',
    component: AddRegulationCategoryComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-regulations',
    component: AddRegulationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'detail-regulation-category/:id',
    component: DetailsRegulationCategoryComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'modify-regulation-category/:id',
    component: ModifyRegulationCategoryComponent,
    canActivate: [AuthGuardService]
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
  },
  {
    path: 'access-map',
    component: AccessMapComponent,
  },
  {
    path: 'specialization',
    component: SpecializationComponent,
  },
  {
    path: 'online-help',
    component: OnlineHelpComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: 'reputation',
    component: ReputationListComponent,
  },
  {
    path: 'document-list',
    component: DocumentListComponent,
  },
  {
    path: 'document-client-list',
    component: DocumentClientListComponent,
  },
  {
    path: 'update-document',
    component: UpdateDocumentComponent,
  },
  {
    path: 'add-order',
    component: AddOrderComponent,
  },
  {
    path: 'orders-list',
    component: OrdersListComponent
  },
  {
    path: 'mofidy-order/:id',
    component: ModifyOrderComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModulesRoutingModule { }
