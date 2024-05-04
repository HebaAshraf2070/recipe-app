import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { Component } from '@angular/core';
import { CategoryService } from './services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  constructor(private _CategoryService: CategoryService, public dialog: MatDialog) {
    this.getCategoryData()
  }

  pageSize: number = 10;
  pageNumber: number = 1;
  listData: any;
  categoryItem: string = ''
  getCategoryData() {
    this._CategoryService.getAllCategory(this.pageSize, this.pageNumber).subscribe({
      next: (res) => {
        console.log(res);
        this.listData = res
      }
    })
  }




  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      data: { name: this.categoryItem },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.addCategory(result)
      }

    });
  }


  addCategory(categoryname: string) {

    // let data = {
    //   name: categoryname
    // }

    this._CategoryService.onaddcategory(categoryname).subscribe({
      next: (res) => {
        console.log(res);

      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {
        this.getCategoryData();
      }
    })

  }




  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;


  handlePageEvent(e: PageEvent) {

    console.log(e);
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;

    this.getCategoryData()
  }

}


