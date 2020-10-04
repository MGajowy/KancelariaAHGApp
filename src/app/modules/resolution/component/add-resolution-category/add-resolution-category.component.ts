import { UserStateEnum } from './../../../../generated/UserStateEnum';
import { CategoryDTO} from './../../../../generated/REST';
import { ResolutionService } from './../../service/resolution.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-resolution-category',
  templateUrl: './add-resolution-category.component.html',
  styleUrls: ['./add-resolution-category.component.scss']
})
export class AddResolutionCategoryComponent implements OnInit {

  category: CategoryDTO = new CategoryDTO();
  submitted = false;

  constructor(private resolutionServices: ResolutionService) { }

  ngOnInit(): void {
  this.category.czyPubliczny = false;

  }

  newCategory(): void
  {
    this.submitted = false;
    this.category = new CategoryDTO();
  }

  save(){
    this.resolutionServices.createCategory(this.category)
      .subscribe(data => {
        console.log(data);
        this.submitted = true;
      },
      error => console.log(error));
       this.category = new CategoryDTO();
  }
  onSubmit(){
    this.save();
  }

}
