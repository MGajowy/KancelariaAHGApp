import { UserStateEnum } from './../../../../../generated/UserStateEnum';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserListDTO } from 'src/app/generated/REST';
import { Router } from '@angular/router';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    msgs: Message[] = [];
    position: string;

  acticeButton = '';
  panelOpenState = false;
  listaUzytkownikow: UserListDTO;
  userStateEnum = UserStateEnum;

  constructor(private userService: UserService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig) { }


  ngOnInit(): void {
      this.primengConfig.ripple = true;
      this.reloadData();
    }
      reloadData() {
      this.userService.getUserList().subscribe(value => {
      this.listaUzytkownikow = value;
      console.log(value);
      });
    }

    deleteUser(id: number){
      this.userService.deleteUser(id).subscribe(data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
    }

    activeUser(id: number){
      this.userService.activateUser(id).subscribe(data => {
        console.log(data);
      },
      error => console.log(error));
      this.reloadData();
    }
    unActivateUser(id: number){
      this.userService.unActivateUser(id)
        .subscribe(data => {
          console.log(data)
        },
        error => console.log(error));
    this.reloadData();
    }

    upDateUser(id: number){
      this.router.navigate(['/kancelaria/update-user', id]);
    }

    detailsUser(id: number){
      this.router.navigate(['/kancelaria/user-detail', id]);
    }

    confirmPosition(position: string, id: number, login: string) {
      this.position = position;

      this.confirmationService.confirm({
          message: 'Czy chcesz usunac uzytkownika o loginie: ' + login + '?',
          header: 'Usuwanie uzytkownika',
          icon: 'pi pi-info-circle',
          accept: () => {
              this.msgs = [{severity:'info', summary:'OK.', detail:'Uzytkownik o loginie: ' + login + ' zostal usuniety.'}];
              this.deleteUser(id);
          },
          reject: () => {
              this.msgs = [{severity:'info', summary:'Anulowano usuwanie '+ login + '.'}];
          },
          key: "positionDialog"
      });
  }


    }

