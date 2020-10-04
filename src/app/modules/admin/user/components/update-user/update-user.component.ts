import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/generated/REST';
import { Router, ActivatedRoute } from '@angular/router';
import { UserSexEnum } from 'src/app/generated/UserSexEnum';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: UserDTO;
  submitted = false;
  listaPlci = Object.keys(UserSexEnum);

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
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  updateUser() {
    this.userService.updateUser(this.id, this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new UserDTO();
    this.reloadData();
    this.gotoList();
  }

  onSubmit() {
    this.updateUser();
  }

 gotoList(){
    this.router.navigate(['/kancelaria/user-list']);

  }

  reloadData(){
    this.userService.getUserList();
  }
}
