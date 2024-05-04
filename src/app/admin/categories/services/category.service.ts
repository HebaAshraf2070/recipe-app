import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClientModule
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient: HttpClient) { }

  getAllCategory(pagesize: number, pagenumber: number): Observable<any> {
    return this._HttpClient.post('Category',
      {
        params: { pageSize: 10, pageNumber: 1 }

      })
  }


  onaddcategory(itemName: string): Observable<any> {
    return this._HttpClient.post('Category', { name: itemName })
  }

}
