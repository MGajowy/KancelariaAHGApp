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

import { ResolutionKategoryComponent } from './resolution/component/resolution-category/resolution-kategory.component';
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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ModifyCategoryComponent } from './resolution/component/modify-category/modify-category.component';
import { DetailsCategoryComponent } from './resolution/component/details-category/details-category.component';
import { SetPasswordComponent } from './admin/user/components/set-password/set-password.component';
import { TableModule } from 'primeng/table';
import { AddResolutionComponent } from './resolution/component/add-resolution/add-resolution.component';
import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ResolutionKategoryComponent,
    UsersListComponent,
    ResolutionsListComponent,
    ResolutionKategoryComponent,
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
    AddResolutionComponent
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
    InputSwitchModule
  ],
  providers: [ConfirmationService]
})
export class ModulesModule { }
