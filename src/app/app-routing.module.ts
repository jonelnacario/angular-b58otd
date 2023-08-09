import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './component/login/login.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./component/login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./component/user/user.module').then((mod) => mod.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
