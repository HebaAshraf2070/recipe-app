import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {




  // here in auth.guarde file we created it to check whether user have loged in so that we give him permission to
  // go inside dashboard so we have put this guarde on dashboard module in app.routing.ts file 
  // and inside this guarde we check whether the user who want to enter dashboard have token or not if 
  // he have toke in his localstoreage this means that user logged in succesfully and we will use guarde to return 
  // true in this case which means make user pass
  // put if user don't have token stored in his localstorage this means user didn't succeded in login 
  // so we ill navigate him to login page again and to do so we need to call router in this guarde
  // and to call router we have to use the inject func as guarde is a func not a class 

  const _Router = inject(Router);


  if (localStorage.getItem('userToken') !== null) {
    return true;
  } else {
    _Router.navigate(['/auth'])
    return false;
  }




};


// 1/ first we need to install all the needed packages like bootstrap and fontawesome
//  and link them in the angular.json

// 2/create the structure for your project
// here in our project we have to side of website should be shown to diff types of users 
// first to system user second to admin users ,, to do so there is things that is common
//  between the 2 types of users so for the common things we will create shared folder
//  and there are things should be shown to certain type of users so we will create
// 2 folders one for sysusers and other for admin and also there are things its structure
//  almost the same for the 2 types for users except forlittle diff so we will create
//  folder called dashboard in it we will put guard to make sure
// that any of 2 users are logged in and their token is saved in the localstorage
// then we will direct each user to certain interface or in other words we will show some
// features to users according to their role and to do so we will put guard on number of 
// features and we will know user type from the role that has been stored in the token when users logged in
// also we will create folder to put in it all things related to auth ,,
//  and in auth folder there is common interface between 2 type of users which is login page that should appear 
// for 2 users unlike to register page that should appear only to the sysusers , so we will make login page in
// auth comp main comp and we will create folder inside auth module to put all other comps


// 3/as we will work with api we should call httpclientmodule in the app module and also in
// modules we will deal with api in it like auth.module.ts


// create service folder in module you want to call api in ,, here we will create service folder
// inside auth module and we will create service.ts file inside service folder and inside it we will
// create fetch func to call api of each module inside that module



