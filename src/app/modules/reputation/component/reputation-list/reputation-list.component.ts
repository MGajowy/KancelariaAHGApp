import { Component, OnInit } from '@angular/core';
import { ReputationService } from '../../service/reputation.service';
import { Reputation } from './../../../../generated/REST';
import { AuthServiceService } from 'src/app/core/services/auth/auth-service.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-reputation-list',
  templateUrl: './reputation-list.component.html',
  styleUrls: ['./reputation-list.component.scss']
})
export class ReputationListComponent implements OnInit {

  reputationList: Reputation[];
  message: string = 'Lista opinii jest pusta.'
  like: string;
  notLike: string;
  adminRole: boolean = false;
  listRoles: any;
  reloadNewList: boolean = false;

  constructor(
    private reputationService: ReputationService,
    private authservice: AuthServiceService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    if (this.authservice.isUserLoggedIn()) {
      this.getRole();
    }
    this.loadList();
  }

  getRole(): boolean {
    this.authservice.getRoles().subscribe(result => {
      this.listRoles = result;
      this.listRoles.forEach(element => {
        if (element == 'ADMIN') {
          this.adminRole = true;
        }
      });
    })
    return this.adminRole;
  }

  addLike(id: number) {
    this.reputationService.addLikeReputation(id).subscribe(() =>
      this.loadList())
  }

  addNotLike(id: number) {
    this.reputationService.addNotLikeReputation(id).subscribe(() =>
      this.loadList())
  }

  loadList() {
    this.reputationService.getReputationList().subscribe(result => {
      this.reputationList = result;
    })
  }

  deleteReputation(id: number) {
    this.reputationService.deleteReputation(id).subscribe(result => {
      console.log(result);
      if (result.status === 200) {
        this.showSuccessMessage();
        this.loadList();
      } else {
        this.showErrorMessage();
      }
    })
  }

  reloadList(result: boolean) {
    console.log(result);
    this.reloadNewList = result;
    if (this.reloadNewList) {
      this.loadList();
    }

  }

  showSuccessMessage() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Opinia została usunięta.' });
  }

  showErrorMessage() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Błąd usuwania opinii.', detail: 'Skontaktuj się z administratorem' });
  }

}
