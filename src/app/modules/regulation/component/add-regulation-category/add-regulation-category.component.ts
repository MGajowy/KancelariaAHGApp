import { Component, OnInit } from '@angular/core';
import { RegulationService} from '../../service/regulation.service';
import { CategoryDTO} from './../../../../generated/REST';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-regulation-category',
  templateUrl: './add-regulation-category.component.html',
  styleUrls: ['./add-regulation-category.component.scss']
})
export class AddRegulationCategoryComponent implements OnInit {

  category: CategoryDTO = new CategoryDTO();
  submitted = false;

  constructor(
    private regulationService: RegulationService,
    private messageService: MessageService,
    ) { }

  ngOnInit() {
    this.category.isPublic = false;
  }

  private save(){
    if (this.category.isPublic == null)
    this.category.isPublic = false;
    this.regulationService.createCategory(this.category)
      .subscribe(res => {
        if (res === 201) {
          this.showSuccessMessage();
        } else {
          this.showErrorMessage()
        }
        this.submitted = true;
      },
      error => console.log(error));
       this.category = new CategoryDTO();
  }
  onSubmit(){
    this.save();
  }

  newCategory(): void
  {
    this.submitted = false;
    this.category = new CategoryDTO();
  }

  showSuccessMessage() {
    this.messageService.add({key: 'tc', severity:'success', summary:'Dodano nową kategorie.'});
  }

  showErrorMessage() {
    this.messageService.add({key: 'tc', severity:'error', summary:'Błąd dodania kategorii', detail:'Skontaktuj się z administratorem'});
  }

}
