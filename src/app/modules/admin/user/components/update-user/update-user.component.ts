import { FormControl } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/generated/REST';
import { Router, ActivatedRoute } from '@angular/router';
import { UserSexEnum } from 'src/app/generated/UserSexEnum';
import { RolesName } from 'src/app/generated/RolesName';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: UserDTO;
  roles: RolesName;
  role: RolesName[];
  submitted = false;
  sexList = Object.keys(UserSexEnum);
  rolesList = Object.keys(RolesName);
  term: FormControl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private messageService: MessageService,
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
    this.userService.updateUser(this.id, this.user)
      .subscribe(data => {
        this.user = data
        if (data.status === 200) {
          this.showSuccessMessage();
        } else {
          this.showErrorMessage();
        }
      });
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

  showSuccessMessage() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Zmodyfikowano użytkownika.' });
  }

  showErrorMessage() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Błąd podczas modyfikacji użytkownika', detail: 'Skontaktuj się z administratorem, lub spróbuj ponownie.' });
  }
}
