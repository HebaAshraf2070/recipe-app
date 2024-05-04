
import { Component, OnInit } from '@angular/core';
import { AuthserService } from './services/authser.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
AuthserService
Validators

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private _AuthserService: AuthserService, private _Router: Router) { }


  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z0-9$@*_]{8,100}$/)])
  })
  // create formgroup in which we want to receive data that come from user when user login
  // then we need to link this formgroup with html so once user enter his data it is sent 
  // to us through formgroup


  ngOnInit(): void {


  }

  // once fetch func in service file call the api 
  // we create intermediate func to handle response that come from api after calling api 
  // using fetch func in service to get response that come from api and then use it 
  // and take token that comes from response to set it in localstorage 
  onlogin(data: FormGroup) {
    this._AuthserService.login(data.value).subscribe({
      next: (response) => {
        localStorage.setItem('userToken', response.token);
        // everytime after login call getprofile func to decode token
        this._AuthserService.getprofile();
      },
      error: (err) => {

      },
      complete: () => {
        this._Router.navigate(['dashboard'])
      }

    })
  }


}
