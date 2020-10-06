import { AuthServiceService } from './../../../core/services/auth/auth-service.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
   loginProces() {
    if (this.formGroup.valid){
      this.authService.authenticate(this.formGroup.get('username').value, this.formGroup.get('password').value).subscribe(result => {
        if (result.success){
          console.log(result)
        }else {
          this.router.navigate(['kancelaria/home'])
        }
      });

    }
  }
}
