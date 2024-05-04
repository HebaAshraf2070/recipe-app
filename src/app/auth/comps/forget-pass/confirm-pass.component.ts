import { Component } from '@angular/core';
import { AuthserService } from '../../services/authser.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-pass',
  templateUrl: './confirm-pass.component.html',
  styleUrls: ['./confirm-pass.component.scss']
})
export class ConfirmPassComponent {
  constructor(private _AuthserService: AuthserService, private _Router: Router) { }


  forgetPassform: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required])
  })

  confirmPass(forgetPassform: FormGroup) {
    this._AuthserService.onforgetPass(forgetPassform.value).subscribe({
      next: (response) => {
        console.log(response);
        this._Router.navigate(['../auth/resetPassword'])
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

}
