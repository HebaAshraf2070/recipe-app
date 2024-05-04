import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private _HttpClient: HttpClient) { }

  getAllRecipes(paramData: any): Observable<any> {
    return this._HttpClient.post('Recipe', { paramData })
  }


  onaddRecipe(data: FormData): Observable<any> {
    return this._HttpClient.post('Recipe', data)
  }


  // lookup list is a predefiend list we can select from it and it should be stored 
  // in the shared module to be accessable when needed 

  // helper service it is a service we create inside shared file and save inside it any 
  // code we might need in random places in our project



  getAllTags(): Observable<any> {
    return this._HttpClient.get('Tag')
  }

}



