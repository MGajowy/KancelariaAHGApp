import { Component, OnInit } from '@angular/core';
import { ReputationService } from '../../service/reputation.service';
import { Reputation } from './../../../../generated/REST';

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

  constructor(
    private reputationService: ReputationService,
  ) { }

  ngOnInit() {
    this.loadList();
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
    this.reputationService.getReputationList().subscribe(res => {
      this.reputationList = res;
    })
  }

}
