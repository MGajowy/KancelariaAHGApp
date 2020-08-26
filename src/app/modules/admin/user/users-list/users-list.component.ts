import { Component, OnInit } from '@angular/core';
import { UserListDTO } from 'src/app/generated/REST';
import { UserService } from '../services/user.service';

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
}
