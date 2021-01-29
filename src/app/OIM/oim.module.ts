import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OimListComponent } from './oim-list.component';
import { OimDetailComponent } from './oim-detail.component';
import { OimEditComponent } from './oim-edit/oim-edit.component';
import { OimResolver } from './oim-resolver.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { OimEditInfoComponent } from './oim-edit/oim-edit-info.component';
import {AgGridModule} from "ag-grid-angular";
@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    AgGridModule.withComponents(null),
    RouterModule.forChild([
      {
        path: '',
        component: OimListComponent
      },
      {
        path: ':id',
        component: OimDetailComponent,
        resolve: { resolvedData: OimResolver }
      },
      {
        path: ':id/edit',
        component: OimEditComponent
      
      },
    ])
  ],
  declarations: [
    OimListComponent,
    OimDetailComponent,
    OimEditComponent,
  ]
})
export class oimModule { }
