import { UserSexEnum } from 'src/app/generated/UserSexEnum';

import { UserService } from './../../admin/user/services/user.service';
import { AuthServiceService } from './../../../core/services/auth/auth-service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStateEnum } from 'src/app/generated/UserStateEnum';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  listSex = Object.keys(UserSexEnum);
  isLogged: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthServiceService,
    private userService: UserService,
    private messageService: MessageService,
  ) { }
  ngOnInit() {
    this.isLogged = this.authenticationService.isUserLoggedIn();
    if (this.isLogged) {
      this.showIsLogedMessage();
      setTimeout(() => {
        this.router.navigate(['office/home']);
      }, 500);
    } else {
      this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required, Validators.minLength(6)],
        imie: ['', Validators.required],
        nazwisko: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        telefon: ['', Validators.required],
        plec: ['', Validators.required],
        stan: [UserStateEnum.NIEAKTYWNY]
      });
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      this.showValidationMessage();
      return;
    } else {
      this.userService.register(
        this.registerForm.value)
        .subscribe(result => {
          if (result.status === 201) {
            this.showSuccessMessage();
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 3000);
          } else {
            this.showErrorMessage();
          }
        });
    }
  }

  showSuccessMessage() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Zarejestrowano nowego użytkownika.', detail: 'Za chwilę nastąpi przekierowanie do logowania...' });
  }

  showErrorMessage() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Błąd podczas zapisu użytkownika.', detail: 'Skontaktuj się z administratorem, lub spróbuj ponownie.' });
  }

  showValidationMessage() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Uzupełnij wymagane pola.' });
  }

  showIsLogedMessage() {
    this.messageService.add({ key: 'userIsloggedIn', severity: 'info', summary: 'Użytkownik zologowany', detail: 'Jesteś zalogowana/y, aby zarejstrować się ponownie wyloguj się.' });
  }
}

