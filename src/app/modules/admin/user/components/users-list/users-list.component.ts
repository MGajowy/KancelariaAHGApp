import { ResetPasswordDTO } from './../../../../../generated/REST';

import { UserStateEnum } from './../../../../../generated/UserStateEnum';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { LocationDTO, UserListDTO } from 'src/app/generated/REST';
import { Router } from '@angular/router';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { LoginService } from 'src/app/modules/login/service/login.service';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  url: string;
  resetPass: ResetPasswordDTO;
  loca: LocationDTO;
  msgs: Message[] = [];
  position: string;

  acticeButton = '';
  panelOpenState = false;
  listaUzytkownikow: UserListDTO;
  userStateEnum = UserStateEnum;
  term: FormControl;

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig) { }


  ngOnInit() {
    this.url = window.location.origin;
    this.primengConfig.ripple = true;
    // this.reloadData();
     this.wyszukiwarkaUzytkownikow();
  }


  private wyszukiwarkaUzytkownikow(): void {
    this.term = new FormControl('');
     this.reloadData();
    this.term.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(() => {
      this.reloadData();

    })
    console.log(this.term.value)

  }

  reloadData() {
    this.userService.getUserList(this.term.value).subscribe(res => {
      this.listaUzytkownikow = res;
      console.log(res);
    })
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    },
      error => console.log(error));
  }

  activeUser(id: number) {
    this.loca = new LocationDTO();
    this.loca.id = id;
    this.loca.appUrl = this.url;

    this.userService.activateUser(this.loca).subscribe(data => {
      this.loca = data;
      console.log(data);
      alert('E-mail aktywacyjny został wysłany do użytkownika');
    },
      error => console.log(error));
    this.reloadData();
  }

  unActivateUser(id: number) {
    this.userService.unActivateUser(id)
      .subscribe(data => {
        console.log(data)
      },
        error => console.log(error));
    this.reloadData();
    alert('Użytkownik został zdezaktywowany')
  }

  upDateUser(id: number) {
    this.router.navigate(['/kancelaria/update-user', id]);
  }

  detailsUser(id: number) {
    this.router.navigate(['/kancelaria/user-detail', id]);
  }

  confirmPosition(position: string, id: number, login: string) {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Czy chcesz usunac uzytkownika o loginie: ' + login + '?',
      header: 'Usuwanie uzytkownika',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.msgs = [{ severity: 'info', summary: 'OK.', detail: 'Uzytkownik o loginie: ' + login + ' zostal usuniety.' }];
        this.deleteUser(id);
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Anulowano usuwanie ' + login + '.' }];
      },
      key: "positionDialog"
    });
  }

  resetPassword(username: string) {
    this.resetPass = new ResetPasswordDTO();
    this.resetPass.appUrl = this.url;
    this.resetPass.username = username;
    this.loginService.sendResetPassword(this.resetPass).subscribe(data => {
      this.resetPass = data;
      console.log(data);
    });
    this.reloadData();
    alert('E-mail z resetem hasła został wysłany do użytkownika')

  }


}

