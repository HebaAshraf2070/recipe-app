import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { HttpClientModule } from "@angular/common/http";
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

HttpClientModule
@NgModule({
  declarations: [ShareComponent, SideBarComponent, NavbarComponent, DeleteComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxDropzoneModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  exports: [
    NgxDropzoneModule,
    SideBarComponent,
    NavbarComponent,
    // we wrote sidebarcomp and navbarcomp in the export of its module to be able to use them outide its module
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule,
    MatSelectModule
  ]

})
export class ShareModule { }
