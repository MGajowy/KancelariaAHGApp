import { UserStateEnum } from './../../../../../generated/UserStateEnum';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserSexEnum } from 'src/app/generated/UserSexEnum';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  userStateEnum = UserStateEnum;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
    ) { }
  ngOnInit()
  {
    this.registerForm = this.formBuilder.group({
      username:  ['', Validators.required],
      imie: ['', Validators.required],
      nazwisko: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      telefon: ['', Validators.required],
      plec: ['', Validators.required],
      stan: [this.userStateEnum.NIEAKTYWNY],
    });
    }

  onSubmit(){
    this.submitted = true;

    if (this.registerForm.invalid) {
      alert('Uzupełnij pola wymagane zanaczone na kolor czerwony')

          return;
      }else{
    this.userService.addUser(
       this.registerForm.value)
      .subscribe(result => {
        if (result.success){
          console.log(result);
        }else {
          this.router.navigate(['']);
        }
      });
      alert('Uzytkownik zostal dodany do listy uzytkownikow')
        this.router.navigate(['kancelaria/user-list']);
    }
    }

}
