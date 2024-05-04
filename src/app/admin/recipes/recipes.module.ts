import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { AddEditRecipesComponent } from './components/add-edit-recipes/add-edit-recipes.component';
import { ShareModule } from 'src/app/shared/share.module';


@NgModule({
  declarations: [
    RecipesComponent,
    AddEditRecipesComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    ShareModule
  ]
})
export class RecipesModule { }
