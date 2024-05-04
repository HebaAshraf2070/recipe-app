import { ShareModule } from './../shared/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    RouterModule,
    ShareModule,
    // we wrote sharedmodule in imports array of dashboard as we want to use comps from inside the sharedmodule 
    // inside dashboardmodule
  ]
})
export class DashBoardModule { }
