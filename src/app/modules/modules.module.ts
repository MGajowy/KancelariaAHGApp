import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ModulesRoutingModule } from './modules-routing.module';
import { ResolutionsListComponent } from './resolution/component/resolutions-list/resolutions-list.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { UsersListComponent } from './admin/user/components/users-list/users-list.component';

import { ResolutionCategoryComponent } from './resolution/component/resolution-category/resolution-category.component';
import { AddUserComponent } from './admin/user/components/add-user/add-user.component';
import { UserDetailsComponent } from './admin/user/components/user-details/user-details.component';
import { UserProfileComponent } from './admin/user/components/user-profile/user-profile.component';
import { EventLogComponent } from './admin/event-log/component/event-log.component';
import { RegulationCategoryComponent } from './regulation/component/regulation-category/regulation-category.component';
import { RegulationListComponent } from './regulation/component/regulation-list/regulation-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { AddResolutionCategoryComponent } from './resolution/component/add-resolution-category/add-resolution-category.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { UpdateUserComponent } from './admin/user/components/update-user/update-user.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ModifyCategoryComponent } from './resolution/component/modify-category/modify-category.component';
import { DetailsCategoryComponent } from './resolution/component/details-category/details-category.component';
import { SetPasswordComponent } from './admin/user/components/set-password/set-password.component';
import { TableModule } from 'primeng/table';
import { AddResolutionComponent } from './resolution/component/add-resolution/add-resolution.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AddRegulationCategoryComponent } from './regulation/component/add-regulation-category/add-regulation-category.component';
import { AddRegulationComponent } from './/regulation/component/add-regulation/add-regulation.component';
import { DetailsRegulationCategoryComponent } from './regulation/component/details-regulation-category/details-regulation-category.component';
import { ModifyRegulationCategoryComponent } from './regulation/component/modify-regulation-category/modify-regulation-category.component';
import { AccessMapComponent } from './about/access-map/access-map.component';
import { SpecializationComponent } from './about/specialization/specialization.component';
import { OnlineHelpComponent } from './about/online-help/online-help.component';
import { CareerComponent } from './about/career/career.component';
import { GMapModule } from 'primeng/gmap';
import { TreeModule } from 'primeng/tree';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { MenuModule} from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ModifyResolutionComponent } from './resolution/component/modify-resolution/modify-resolution.component';
import { ReputationListComponent } from './reputation/component/reputation-list/reputation-list.component';
import { AddReputataionComponent } from './reputation/component/add-reputation/add-reputataion.component';
import { DocumentClientListComponent} from './document/component/document-client-list/document-client-list.component';
import { DocumentListComponent} from './document/component/document-list/document-list.component';
import { UpdateDocumentComponent} from './document/component/update-document/update-document.component';
import { OrderListModule } from 'primeng/orderlist';
import { PaginatorModule } from 'primeng/paginator';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {OrdersListComponent} from './admin/order/component/orders-list/orders-list.component';
import {AddOrderComponent} from './admin/order/component/add-order/add-order.component';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { ModifyOrderComponent } from './admin/order/component/modify-order/modify-order.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    UsersListComponent,
    ResolutionsListComponent,
    ResolutionCategoryComponent,
    AddUserComponent,
    UserDetailsComponent,
    UserProfileComponent,
    EventLogComponent,
    RegulationCategoryComponent,
    RegulationListComponent,
    AddResolutionCategoryComponent,
    UpdateUserComponent,
    ModifyCategoryComponent,
    DetailsCategoryComponent,
    AddResolutionComponent,
    AddRegulationCategoryComponent,
    AddRegulationComponent,
    DetailsRegulationCategoryComponent,
    ModifyRegulationCategoryComponent,
    AccessMapComponent,
    SpecializationComponent,
    OnlineHelpComponent,
    CareerComponent,
    ModifyResolutionComponent,
    AddReputataionComponent,
    ReputationListComponent,
    DocumentClientListComponent,
    DocumentListComponent,
    UpdateDocumentComponent,
    AddOrderComponent,
    OrdersListComponent,
    ModifyOrderComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModulesRoutingModule,
    //AppRoutingModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatGridListModule,
    MatSelectModule,
    MatCheckboxModule,
    ConfirmDialogModule,
    ButtonModule,
    MessagesModule,
    TableModule,
    MatButtonToggleModule,
    InputSwitchModule,
    GMapModule,
    TreeModule,  
    MessageModule,
    ToastModule,
    CheckboxModule,
    MenuModule,
    RippleModule,
    OrderListModule,
    PaginatorModule,
    FileUploadModule, 
    MultiSelectModule,
    ProgressSpinnerModule,
    DialogModule,
    CalendarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    ConfirmationService,
    MessageService]
})
export class ModulesModule { }
