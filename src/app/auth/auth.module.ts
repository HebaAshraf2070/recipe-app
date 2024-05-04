import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './comps/register/register.component';
import { ShareModule } from '../shared/share.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmCodeComponent } from './comps/confirm-code/confirm-code.component';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ConfirmPassComponent } from './comps/forget-pass/confirm-pass.component';
import { ResetPassComponent } from './comps/reset-pass/reset-pass.component';
RouterModule
MatDialog
@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    ConfirmCodeComponent,
    ConfirmPassComponent,
    ResetPassComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ShareModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,

  ]
})
export class AuthModule { }
