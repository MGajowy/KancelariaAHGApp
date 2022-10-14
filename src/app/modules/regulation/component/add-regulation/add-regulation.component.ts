import { Component, OnInit } from '@angular/core';
import { RegulationService } from '../../service/regulation.service';
import { CategoryListDTO, CreateRegulationDTO } from './../../../../generated/REST';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-regulation',
  templateUrl: './add-regulation.component.html',
  styleUrls: ['./add-regulation.component.scss']
})
export class AddRegulationComponent implements OnInit {

  regulation: CreateRegulationDTO = new CreateRegulationDTO;
  categoryList: CategoryListDTO;
  submitted = false;

  constructor(
    private regulationServices: RegulationService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getCategoryList();
    this.regulation.czyPubliczny = true;
  }

  newRegulation(): void {
    this.submitted = false;
    this.regulation = new CreateRegulationDTO;
  }

  getCategoryList() {
    this.regulationServices.getRegulationCategoryList().subscribe(value => {
      this.categoryList = value;
    })
  }

  save() {
    this.regulationServices.createRegulation(this.regulation)
      .subscribe(data => {
        if (data.status === 201) {
          this.showSuccessMessage();
        } else {
          this.showErrorMessage();
        }
        this.submitted = true;
      },
        error => console.log(error));
    this.regulation = new CreateRegulationDTO;
  }

  onSubmit() {
    this.save();
  }

  showSuccessMessage() {
    this.messageService.add({key: 'tc', severity:'success', summary:'Dodano rozporządzenie.'});
  }

  showErrorMessage() {
    this.messageService.add({key: 'tc', severity:'error', summary:'Błąd dodania rozporządzenia.', detail:'Skontaktuj się z administratorem'});
  }

}
