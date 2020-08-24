import { UserListDTO } from './../../../generated/REST';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

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


