import { UserStateEnum } from './../../../../../generated/UserStateEnum';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserListDTO } from 'src/app/generated/REST';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {


  acticeButton = '';
  panelOpenState = false;
  listaUzytkownikow: UserListDTO;
  userStateEnum = UserStateEnum;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
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
    //   this.userService.unActivateUser(id)
    //     .subscribe(data => {
    //       console.log(data)
    //     },
    //     error => console.log(error));
    this.reloadData();
    }


    }

