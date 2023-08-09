import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: 'table',
    component: UserTableComponent,
  },
  {
    path: 'create',
    component: UserFormComponent,
  },
  {
    path: 'update/:id',
    component: UserFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class UserRoutingModule {}
