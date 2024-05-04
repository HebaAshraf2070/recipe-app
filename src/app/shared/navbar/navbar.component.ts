import { GlobalInterceptor } from './../../core/interceptors/global.interceptor';
import { Component, OnInit } from '@angular/core';
import { AuthserService } from 'src/app/auth/services/authser.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // constructor(private _AuthserService: AuthserService) { }



  // profileImageUrl: any = 'user.imagePath';
  // ngOnInit(): void {

  //   this.profileImageUrl = localStorage.getItem('profileImageUrl');
  //   console.log(this.profileImageUrl);
  // }


}
