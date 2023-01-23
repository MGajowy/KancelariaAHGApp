import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddReputation, OutputStream, ReputationAdd } from 'src/app/generated/REST';
import { ReputationService } from '../../service/reputation.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reputataion',
  templateUrl: './add-reputataion.component.html',
  styleUrls: ['./add-reputataion.component.scss']
})
export class AddReputataionComponent implements OnInit {
  @Output() addNewReputation = new EventEmitter<Boolean>();

  reputation: ReputationAdd = new ReputationAdd;
  addReputation: AddReputation = new AddReputation;
  submitted = false;


  constructor(
    private reputationService: ReputationService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.reputation = new ReputationAdd;
    this.reputation.user = 'Gość'
  }

  onSubmit() {
    this.submitted;
    if (this.reputation.user == undefined || this.reputation.description == undefined) {
      this.showValidationMessage();
    } else if (this.reputation.user == undefined && this.reputation.description == undefined) {
      this.showValidationMessage();
    } else if (this.reputation.user == '' || this.reputation.description == '') {
      this.showValidationMessage();
    } else {
      this.save();
      this.addNewReputation.emit(true);
    }
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

  showSuccessMessage() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Twoja opinia została dodana.' });
  }

  showErrorMessage() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Błąd dodania opinii.', detail: 'Skontaktuj się z administratorem' });
  }

  showValidationMessage() {
    this.messageService.add({ key: 'tc', severity: 'info', summary: 'Uzupełnij puste pola, aby dodać własną opinię.' });
  }

}
