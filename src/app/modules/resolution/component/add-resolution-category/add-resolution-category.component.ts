import { UserStateEnum } from './../../../../generated/UserStateEnum';
import { CategoryDTO} from './../../../../generated/REST';
import { ResolutionService } from './../../service/resolution.service';
import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-resolution-category',
  templateUrl: './add-resolution-category.component.html',
  styleUrls: ['./add-resolution-category.component.scss']
})
export class AddResolutionCategoryComponent implements OnInit {

  category: CategoryDTO = new CategoryDTO();
  submitted = false;

  constructor(
    private resolutionServices: ResolutionService,
    private messageService: MessageService,
    ) { }

  ngOnInit(): void {
  this.category.czyPubliczny = false;
  }

  newCategory(): void
  {
    this.submitted = false;
    this.category = new CategoryDTO();
  }

   private save(){
    if (this.category.czyPubliczny == null)
    this.category.czyPubliczny = false;
    this.resolutionServices.createCategory(this.category)
      .subscribe(res => {
        if (res === 201) {
          this.showSuccessMessage();
        } else {
          this.showErrorMessage();
        }
        this.submitted = true;
      },
      error => console.log(error));
       this.category = new CategoryDTO();
  }
  onSubmit(){
    this.save();
  }

  showSuccessMessage() {
    this.messageService.add({severity:'success', summary:'Dodano nową kategorie.'});
  }

  showErrorMessage() {
    this.messageService.add({severity:'error', summary:'Błąd dodania kategorii', detail:'Skontaktuj się z administratorem'});

  }
}
