import { ResetPasswordDTO } from './../../../generated/REST';
import { LoginService } from './../service/login.service';
import { AuthServiceService } from './../../../core/services/auth/auth-service.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  dto = new ResetPasswordDTO();

  constructor(
    private authService: AuthServiceService,
      private loginService: LoginService,
      private router: Router,
      private messageService: MessageService,
      ) { }

  ngOnInit(): void {
    this.initForm();
  }

  // resetPassword(){
  //   this.loginService.sendResetPassword(this.dto).subscribe(res => {this.dto = res; });
  // }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
   loginProces() {
    if (this.formGroup.valid){
      this.authService.authenticate(this.formGroup.get('username').value,
      this.formGroup.get('password').value).subscribe(userData => {
        if (userData.token){
                this.showSuccessMessage();
          setTimeout(() => {
            this.router.navigate(['office/home'])
          }, 3000);
         
        } else {
          this.showErrorMessage();
        }
      });

    }
  }

  showSuccessMessage() {
    this.messageService.add({key: 'tc', severity:'success', summary:'Zalogowany.', detail:'Za chwilę zostaniesz przekierowny na stronę główną.'});
  }

  showErrorMessage() {
    this.messageService.add({key: 'tc', severity:'error', summary:'Błąd podczas logowania.', detail:'Skontaktuj się z administratorem.'});
  }
}
