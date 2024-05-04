import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserService } from '../../services/authser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-code',
  templateUrl: './confirm-code.component.html',
  styleUrls: ['./confirm-code.component.scss']
})
export class ConfirmCodeComponent {

  constructor(private _AuthserService: AuthserService, private _Router: Router) { }


  confirmGroup: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.email]),
    code: new FormControl("")
  })


  onConfirmCode(data: FormGroup) {
    this._AuthserService.onConfirm(data.value).subscribe({
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
