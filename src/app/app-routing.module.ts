import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guardes/auth.guard';


const routes: Routes = [


  // in ,ain routing check if url is empty redirect to auth module which include login page  
  { path: "", redirectTo: "auth", pathMatch: 'full' },

  {
    // if path is auth go bring auth module which include login page 
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  // if path 
  { path: 'dashboard', canActivate: [authGuard], loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule) }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
