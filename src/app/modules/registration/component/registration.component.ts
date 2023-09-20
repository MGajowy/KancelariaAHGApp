import { UserSexEnum } from 'src/app/generated/UserSexEnum';

import { UserService } from './../../admin/user/services/user.service';
import { AuthServiceService } from './../../../core/services/auth/auth-service.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStateEnum } from 'src/app/generated/UserStateEnum';
import { MessageService } from 'primeng/api';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  name = new FormControl('', [Validators.required]);
  surname = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [Validators.required, Validators.minLength(9), Validators.pattern('[- +()0-9]+')]);
  sex = new FormControl('', [Validators.required]);
  activationState = new FormControl(UserStateEnum.NIEAKTYWNY);

  submitted = false;
  registerForm: FormGroup;
  listSex = Object.keys(UserSexEnum);
  isLogged: boolean;

  matcher = new MyErrorStateMatcher();

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
    }
    else {
      this.registerForm = this.formBuilder.group({
        email: this.email,
        username: this.username,
        password: this.password,
        name: this.name,
        surname: this.surname,
        phoneNumber: this.phoneNumber,
        sex: this.sex,
        activationState: this.activationState
      })
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

