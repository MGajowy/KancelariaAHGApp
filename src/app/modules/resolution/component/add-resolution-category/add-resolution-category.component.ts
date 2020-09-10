import { CategoryDTO, OrPublic } from './../../../../generated/REST';
import { ResolutionService } from './../../service/resolution.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-resolution-category',
  templateUrl: './add-resolution-category.component.html',
  styleUrls: ['./add-resolution-category.component.scss']
})
export class AddResolutionCategoryComponent implements OnInit {

  category: CategoryDTO = new CategoryDTO();
  czyPubliczny: OrPublic;
  submitted = false;

  constructor(private resolutionServices: ResolutionService) { }

  ngOnInit(): void {

  }

  newCategory(): void
  {
    this.submitted = false;
    this.category = new CategoryDTO();
  }

  save(){
   // this.category.czyPubliczny = this.czyPubliczny;
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
