import { Component } from '@angular/core';
import { AuthserService } from '../../services/authser.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent {
  constructor(private _AuthserService: AuthserService, private _Router: Router) { }

  ResetPassForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    seed: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required])
  })

  ResetPass(ResetPassForm: FormGroup): void {
    this._AuthserService.onResetPass(ResetPassForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this._Router.navigate(['../auth'])

      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
