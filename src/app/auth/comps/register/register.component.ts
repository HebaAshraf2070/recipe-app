import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthserService } from '../../services/authser.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  constructor(private _AuthserService: AuthserService, private _Router: Router) { }



  registerForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z0-9$@*_]{8,100}$/)]),
    confirmPassword: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required]),
    profileImage: new FormControl(null,)

  })

  ngOnInit(): void {

  }


  hide: Boolean = true;
  onRegister(data: FormGroup) {


    // create new formData by syntax => new formData()
    let myData = new FormData()

    myData.append("userName", data.value.userName);
    myData.append("email", data.value.email);
    myData.append("phoneNumber", data.value.phoneNumber);
    myData.append("country", data.value.country);
    myData.append("password", data.value.password);
    myData.append("confirmPassword", data.value.confirmPassword);
    myData.append("profileImage", this.imgSrc);


    this._AuthserService.Register(myData).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('profileImageUrl', response.profileImage);
        this._Router.navigate(['../auth/code'])

      },
      error: (err) => {
        console.log(err);

      }

    })
  }

  confirmGroup: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.email]),
    code: new FormControl("")
  })



  // profilePhoto

  files: File[] = [];
  imgSrc: any;
  onSelect(event: any) {
    console.log(event);
    // spread operator "..." ,, 
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0];
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }






}
