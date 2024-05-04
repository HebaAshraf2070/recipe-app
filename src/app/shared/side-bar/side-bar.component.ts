import { Component } from '@angular/core';
import { AuthserService } from 'src/app/auth/services/authser.service';



interface IMenu {
  text: string;
  icon: string;
  link: string;
  isActive: boolean;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  constructor(private _AuthserService: AuthserService) { }

  isAdmin(): boolean {
    return this._AuthserService.role == 'SuperAdmin' ? true : false
  }

  isUser(): boolean {
    return this._AuthserService.role == 'SystemUser' ? true : false
  }


  menu: IMenu[] = [
    {
      text: 'Home',
      icon: 'fa-solid fa-home',
      link: '/dashboard',
      isActive: this.isAdmin() || this.isUser(),
    },
    {
      text: 'Users',
      icon: 'fa-solid fa-home',
      link: '/dashboard/admin/user',
      isActive: this.isAdmin(),
    },
    {
      text: 'Admin Recipes',
      icon: 'fa-solid fa-home',
      link: '/dashboard/admin/recipes',
      isActive: this.isAdmin(),
    },
    {
      text: 'Categories',
      icon: 'fa-solid fa-home',
      link: '/dashboard/admin/categories',
      isActive: this.isAdmin(),
    },
    {
      text: 'User Recipe',
      icon: 'fa-solid fa-home',
      link: '/dashboard/user/user-recipe',
      isActive: this.isUser(),
    },
    {
      text: 'Favorites',
      icon: 'fa-solid fa-home',
      link: '/dashboard/user/favorites',
      isActive: this.isUser(),
    }
  ]

}
