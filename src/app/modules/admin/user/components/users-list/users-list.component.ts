import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserListDTO } from 'src/app/generated/REST';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  panelOpenState = false;
  listaUzytkownikow: UserListDTO;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.reloadData();
      console.log(this.listaUzytkownikow);
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

    }

