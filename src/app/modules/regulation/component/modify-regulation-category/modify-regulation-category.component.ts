import { Component, OnInit } from '@angular/core';
import { RegulationService } from '../../service/regulation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDTOrequest } from 'src/app/generated/REST';

interface Choise {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-modify-regulation-category',
  templateUrl: './modify-regulation-category.component.html',
  styleUrls: ['./modify-regulation-category.component.scss']
})

export class ModifyRegulationCategoryComponent implements OnInit {
  id: number;
  submitted = false;
  category: CategoryDTOrequest;
  list: Choise[] = [
    {value: 'true', viewValue: 'TAK'},
    {value: 'false', viewValue: 'NIE'},
  ]
  constructor(
    private router: Router,
    private regulationService: RegulationService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.category = new CategoryDTOrequest();
    this.id = this.route.snapshot.params['id'];
    this.regulationService.detailsCategory(this.id)
      .subscribe(res => {
        this.category = res;
      }, error => console.log(error));
  }

  gotoList() {
    this.reloadData();
    this.router.navigate(['/office/category-regulations']);
  }

  onSubmit() {
    this.updateCategory();
  }

  updateCategory() {
    this.regulationService.updateCategory(this.id, this.category)
      .subscribe(data => console.log(data),
        error => console.log(error));
    this.category = new CategoryDTOrequest();

    this.gotoList();
  }

  reloadData() {
    this.regulationService.getRegulationCategoryList();
  }

}
