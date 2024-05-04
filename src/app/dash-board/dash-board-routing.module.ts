import { userGuard } from './../core/guardes/user.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';
import { adminGuard } from '../core/guardes/admin.guard';
import { authGuard } from '../core/guardes/auth.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: "", canActivate: [authGuard], component: DashBoardComponent, children: [
      // { path: '', redirectTo: 'home', pathMatch: 'full' },
      // { path: 'home', component: HomeComponent },
      {
        path: "admin", canActivate: [adminGuard], loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: "user", canActivate: [userGuard], loadChildren: () => import('../user/user.module').then(m => m.UserModule)
      },

    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
