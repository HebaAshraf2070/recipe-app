import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilogin, Iconfirm } from '../models/authmod';
import { jwtDecode } from 'jwt-decode';

HttpClient
// import httpclient module to be able to call api 
@Injectable({
  providedIn: 'root'
})
export class AuthserService {

  constructor(private _HttpClient: HttpClient) {
    // call getprofile func to retrive token in localstorage after refresh 
    // as we know constructor is the very first thing to be called 
    if (localStorage.getItem('userToken') !== null) {
      this.getprofile();
    }

  }

  // create fetch data func that call api and send in url the end point only 
  // as we will use interceptor and we create it in core folder go look in interceptor file 
  // for globalinterceptor.ts

  login(data: Ilogin): Observable<any> {
    return this._HttpClient.post('Users/Login', data)
  }
  // in login func the type of object that comes from login page is interface 
  // as we created interface called Ilogin to be the standard in which shape we want our 
  // upcoming object from login of user to be



  Register(data: FormData): Observable<any> {
    return this._HttpClient.post('Users/Register', data)
  }
  // in register func the type of object that comes from register page is formData 
  // as the form that should user fill include img and any form should be sent to us in 
  // shape of object and its values are string but incase object include img the form data 
  // is transfered into something binary called base64
  // which require diff type of objects to be sent in 
  // and the formData can transfer base64 into string so here we used formData as a type of 
  // object in which we will receive data that come from register of users





  // then we create func to decode the token that is saved in localstorage to reach to role that 
  // is being saved in token by backend 
  // and we need this role to make sure of type of user to show certain features for user 
  // according to his role

  // in this func we say get token that is saved in local storage under key named userToken 
  // and save it in var called encode 
  // then decript this var or token that is saved in encode var and save the decripted token 
  // in var called decode and we made vars of any type as we don't know type of data that come
  // from token after decription
  // thne 
  role: any = '';
  getprofile() {
    let encode: any = localStorage.getItem('userToken');
    let decode: any = jwtDecode(encode);
    localStorage.setItem('role', decode.userGroup);
    localStorage.setItem('userName', decode.userName);
    this.getRole();

    //  admin ,, user
    // if (localStorage.getItem('userToken') !== null &&
    //   localStorage.getItem('role') !== null) {
    //   this.role = localStorage.getItem('role');
    // }
  }


  getRole() {
    // admin ,, user
    if (localStorage.getItem('userToken') !== null &&
      localStorage.getItem('role') !== null) {
      this.role = localStorage.getItem('role');
    }
  }


  // confirm code
  onConfirm(data: Iconfirm): Observable<any> {
    return this._HttpClient.put('Users/verify', data)
  }



  // forget pass  
  onforgetPass(data: Ilogin): Observable<any> {
    return this._HttpClient.post('Users/Reset/Request', data)
  }



  // reset Pass
  onResetPass(data: Ilogin): Observable<any> {
    return this._HttpClient.post("Users/Reset", data)
  }
}
