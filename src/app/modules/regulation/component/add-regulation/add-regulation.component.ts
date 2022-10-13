import { Component, OnInit } from '@angular/core';
import { RegulationService } from '../../service/regulation.service';
import { CategoryListDTO, CreateRegulationDTO } from './../../../../generated/REST';

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
    private regulationServices: RegulationService
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
        this.submitted = true;
      },
        error => console.log(error));
    this.regulation = new CreateRegulationDTO;
  }

  onSubmit() {
    this.save();
  }

}
