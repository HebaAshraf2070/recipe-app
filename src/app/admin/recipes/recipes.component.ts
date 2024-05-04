import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { RecipeService } from './services/recipe.service';
import { CategoryService } from '../categories/services/category.service';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
CategoryService
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {


  constructor(private _RecipeService: RecipeService, public dialog: MatDialog, private _CategoryService: CategoryService) {
    this.getRecipeData();
    this.getTags();
    this.getAllCategoriess();
  }

  pageSize: number = 10;
  pageNumber: number = 1;
  listData: any;
  categoryItem: string = '';
  tagId: number = 0;
  categoryId: number = 0;

  getRecipeData() {


    let paramData = {
      name: this.searchvalue,
      tagId: this.tagId,
      categoryId: this.categoryId,
      pageSize: this.pageSize,
      pageNumber: this.pageNumber
    }

    this._RecipeService.getAllRecipes(paramData).subscribe({
      next: (res) => {
        console.log(res);
        this.listData = res
      }
    })
  }


  imgUrl: string = 'https://upskilling-egypt.com:3006/';
  imgDummy: string = "../../../assets/images/Rectangle.svg";



  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: { name: this.categoryItem },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {

      }

    });
  }


  onaddCategory(data: FormData) {

    // let data = {
    //   name: categoryname
    // }

    this._RecipeService.onaddRecipe(data).subscribe({
      next: (res) => {
        console.log(res);

      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {
        this.getRecipeData();
      }
    })

  }


  handlePageEvent(e: PageEvent) {

    console.log(e);
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;

    this.getRecipeData()
  }



  searchvalue: string = '';
  listTags: any[] = [];
  getTags() {
    this._RecipeService.getAllTags().subscribe({
      next: (res) => {
        console.log(res);
        this.listTags = res
      }
    })
  }

  listCategories: string = '';
  getAllCategoriess() {





    this._CategoryService.getAllCategory(1000, 1).subscribe({
      next: (res) => {
        console.log(res);
        this.listCategories = res.data;
      }
    })
  }


}


