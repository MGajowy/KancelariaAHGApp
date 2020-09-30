import { UserSexEnum } from 'src/app/generated/UserSexEnum';

import { UserService } from './../../admin/user/services/user.service';
import { AuthServiceService } from './../../../core/services/auth/auth-service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStateEnum } from 'src/app/generated/UserStateEnum';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    submitted = false;
    registerForm: FormGroup;
    listaPlci = Object.keys(UserSexEnum);

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthServiceService,
        private userService: UserService,
    ) {}
    ngOnInit()
    {
      if (this.authenticationService.isUserLoggedIn()) {
        this.router.navigate(['/']);
        alert('Jesteś zalogowany, aby zarejstrować się pomownie wyloguj się.')
    }else
    {
      this.registerForm = this.formBuilder.group({
        username:  ['', Validators.required],
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

    //get f() { return this.registerForm.controls; }

    onSubmit(){
      this.submitted = true;

      if (this.registerForm.invalid) {
        alert('Uzupełnij pola wymagane zanaczone na kolor czerwony')

        return;

        }else{
      this.userService.register(
         this.registerForm.value)
        .subscribe(result => {
          if (result.success){
            console.log(result);
          }else {
            this.router.navigate(['']);
          }
        });
        alert('Rejestracja zakoczona powodzeniem, zaloguj sie do aplikacji')
        this.router.navigate(['login']);
      }
      }
    }

