import { Component, OnInit } from '@angular/core';
import { AddReputation, ReputationAdd } from 'src/app/generated/REST';
import { ReputationService } from '../../service/reputation.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-reputataion',
  templateUrl: './add-reputataion.component.html',
  styleUrls: ['./add-reputataion.component.scss']
})
export class AddReputataionComponent implements OnInit {

  reputation: ReputationAdd = new ReputationAdd;
  addReputation: AddReputation =  new AddReputation;
  submitted = false;


  constructor(
    private reputationService: ReputationService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.reputation = new ReputationAdd;
  }

  onSubmit() {
    this.submitted;
    this.save();
  }

  save() {
    this.addReputation.reputationAdd = this.reputation;
    this.reputationService.addReputation(this.addReputation)
    .subscribe(data => {
      if (data === 201) {
        this.showSuccessMessage();
      } else {
        this.showErrorMessage();
      }
      this.submitted = true;
    },
      error => console.log(error));
      this.reputation = new ReputationAdd;
  }

  loadList() {
    this.reputationService.getReputationList().subscribe(res => {
    })
  }

  showSuccessMessage() {
    this.messageService.add({key: 'tc', severity:'success', summary:'Twoja opinia została dodana.'});
  }

  showErrorMessage() {
    this.messageService.add({key: 'tc', severity:'error', summary:'Błąd dodania opinii.', detail:'Skontaktuj się z administratorem'});
  }
}
