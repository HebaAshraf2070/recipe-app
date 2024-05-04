import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //  interceptor is a guarde for all the api request that go out of project to outside
    // servers so it takes two param ,, first the request of us to api 
    // second is response 

    // we want to make that interceptor responsible for the url of api requests 
    // as instead of writting url each time we send request to api we will save the 
    // base url as it is fixed inside the interceptor and we say to interceptor 
    // each time use see request out of project concat the base url that we saved inside you 
    // with end point we will send in request to api

    // this is the saved base url
    const baseUrl = 'https://upskilling-egypt.com:3006/api/v1/';

    const token = localStorage.getItem('userToken')
    // here we take copy of request through clone func and we say inside clone func get url 
    // from request that will go outside our projct and make this url be baseurl that is saved 
    // inside interceptor and concat it with endpoint that is sent with request
    let x = request.clone({
      url: baseUrl + request.url,
      setHeaders: {
        // 'Authorization': `Bearer ${token}`,
        'Authorization': `${token}`
      }
    })


    // then return to us again with the url that we said to you to concat
    return next.handle(x);
  }
}
