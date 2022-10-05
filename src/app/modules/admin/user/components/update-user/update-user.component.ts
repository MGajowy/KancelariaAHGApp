import { FormControl } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/generated/REST';
import { Router, ActivatedRoute } from '@angular/router';
import { UserSexEnum } from 'src/app/generated/UserSexEnum';
import { RolesName } from 'src/app/generated/RolesName';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: UserDTO;
  rola: RolesName;
  role: RolesName[];
  submitted = false;
  listaPlci = Object.keys(UserSexEnum);
  listaRol = Object.keys(RolesName);
  term: FormControl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = new UserDTO();

    this.id = this.route.snapshot.params['id'];

    this.userService.detailsUser(this.id)
      .subscribe(data => {
        this.user = data;
      }, error => console.log(error));
  }

  updateUser() {
    // this.user = new UserDTO();
    this.userService.updateUser(this.id, this.user)
      .subscribe(data => { this.user = data });

    // this.role.push(this.rola);
    // this.user.role = this.role;
    this.gotoList();
  }

  onSubmit() {
    this.updateUser();
  }

  gotoList() {
    this.router.navigate(['/office/user-list']);
  }

  reloadData() {
    this.term = new FormControl('');
    this.userService.getUserList(({ term: this.term.value }));
  }
}
