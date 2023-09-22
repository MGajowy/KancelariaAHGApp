import { RolesName } from './../../../../../generated/RolesName';

import { UserStateEnum } from './../../../../../generated/UserStateEnum';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserSexEnum } from 'src/app/generated/UserSexEnum';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  name = new FormControl('', [Validators.required]);
  surname = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [Validators.required, Validators.minLength(9), Validators.pattern('[- +()0-9]+')]);
  sex = new FormControl('', [Validators.required]);
  rolesName = new FormControl(RolesName.USER, [Validators.required]);
  activationState = new FormControl(UserStateEnum.NIEAKTYWNY);

  submitted = false;
  registerForm: FormGroup;
  userStateEnum = UserStateEnum;
  roleName = RolesName;
  listSex = Object.keys(UserSexEnum);
  listRole = Object.keys(RolesName);

  checkLoginFlag: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private messageService: MessageService,
  ) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: this.email,
      username: this.username,
      password: this.password,
      name: this.name,
      surname: this.surname,
      phoneNumber: this.phoneNumber,
      sex: this.sex,
      rolesName: this.rolesName,
      activationState: this.activationState
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      this.showValidationMessage();
      return;
    }

    this.userService.checkLogin(this.registerForm.get('username').value).subscribe(response => {
      this.checkLoginFlag = response;

      if (this.checkLoginFlag === true) {
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

      } else {
        this.showLoginMessage();
      }



    })



  }

  showSuccessMessage() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Dodano nowego użytkownika.', detail: 'Za chwilę zostaniesz przekierowny na listę użytkowników...' });
  }

  showErrorMessage() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Błąd podczas zapisu użytkownika.', detail: 'Skontaktuj się z administratorem, lub spróbuj ponownie.' });
  }

  showValidationMessage() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Uzupełnij wymagane pola.' });
  }

  showLoginMessage() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Podany login już instnieje, zmień login i spróbuj ponownie' });
  }

}
