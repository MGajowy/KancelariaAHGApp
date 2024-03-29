import { RolesName } from './../../../../../generated/REST';
import { UserService } from './../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/generated/REST';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id: number;
  user: UserDTO;
  role: RolesName[];

  constructor(private route: ActivatedRoute, private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.user = new UserDTO();
    this.id = this.route.snapshot.params['id'];

    this.userService.detailsUser(this.id)
      .subscribe(data => {
        this.user = data;

      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['/office/user-list']);
  }

}
