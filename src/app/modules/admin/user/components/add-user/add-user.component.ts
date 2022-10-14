import { RolesName } from './../../../../../generated/RolesName';

import { UserStateEnum } from './../../../../../generated/UserStateEnum';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserSexEnum } from 'src/app/generated/UserSexEnum';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  userStateEnum = UserStateEnum;
  roleName = RolesName;
  listSex = Object.keys(UserSexEnum);
  listRole = Object.keys(RolesName);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private messageService: MessageService,
  ) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      imie: ['', Validators.required],
      nazwisko: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      telefon: ['', Validators.required],
      plec: ['', Validators.required],
      rola: [this.roleName.USER, Validators.required],
      stan: [this.userStateEnum.NIEAKTYWNY],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      this.showValidationMessage();
      return;
    } else {
      this.userService.addUser(
        this.registerForm.value)
        .subscribe(result => {

          if (result.status === 201) {
            this.showSuccessMessage();
          } else {
            this.showErrorMessage();
          }
        });
        setTimeout(() => {
          this.router.navigate(['office/user-list'])
        }, 3000);
    }
  }

  showSuccessMessage() {
    this.messageService.add({key: 'tc', severity:'success', summary:'Dodano nowego użytkownika.', detail:'Za chwilę zostaniesz przekierowny na listę użytkowników...'});
  }

  showErrorMessage() {
    this.messageService.add({key: 'tc', severity:'error', summary:'Błąd podczas zapisu użytkownika.', detail:'Skontaktuj się z administratorem, lub spróbuj ponownie.'});
  }

  showValidationMessage() {
    this.messageService.add({key: 'tc', severity:'error', summary:'Uzupełnij wymagane pola.'});
  }

}
