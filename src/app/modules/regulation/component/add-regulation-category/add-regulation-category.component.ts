import { Component, OnInit } from '@angular/core';
import { RegulationService} from '../../service/regulation.service';
import { CategoryDTO} from './../../../../generated/REST';

@Component({
  selector: 'app-add-regulation-category',
  templateUrl: './add-regulation-category.component.html',
  styleUrls: ['./add-regulation-category.component.scss']
})
export class AddRegulationCategoryComponent implements OnInit {

  category: CategoryDTO = new CategoryDTO();
  submitted = false;

  constructor( private regulationService: RegulationService) { }

  ngOnInit() {
    this.category.czyPubliczny = false;
  }

  private save(){
    if (this.category.czyPubliczny == null)
    this.category.czyPubliczny = false;
    this.regulationService.createCategory(this.category)
      .subscribe(() => {
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

}
