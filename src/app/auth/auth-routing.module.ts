import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './comps/register/register.component';
import { ConfirmCodeComponent } from './comps/confirm-code/confirm-code.component';
import { ConfirmPassComponent } from './comps/forget-pass/confirm-pass.component';
import { ResetPassComponent } from './comps/reset-pass/reset-pass.component';

const routes: Routes = [{ path: '', component: AuthComponent },
{ path: "register", component: RegisterComponent },
{ path: 'code', component: ConfirmCodeComponent },
{ path: 'forgetPassword', component: ConfirmPassComponent },
{ path: 'resetPassword', component: ResetPassComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
