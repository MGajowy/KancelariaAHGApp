import { ResolutionService } from './../../service/resolution.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDTOrequest } from 'src/app/generated/REST';

@Component({
  selector: 'app-modify-category',
  templateUrl: './modify-category.component.html',
  styleUrls: ['./modify-category.component.scss']
})
export class ModifyCategoryComponent implements OnInit {
  id: number;
  submitted = false;
  category: CategoryDTOrequest;

  constructor(private router: Router, private resolutionSevice: ResolutionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.category = new CategoryDTOrequest();
    this.id = this.route.snapshot.params['id'];
    this.resolutionSevice.detailsCategory(this.id)
      .subscribe(data => {
        console.log(data)
        this.category = data;
      }, error => console.log(error));
  }

  gotoList(){
    this.reloadData();
    this.router.navigate(['/kancelaria/category-resolutions']);
  }

  onSubmit() {

    this.updateCategory();
  }

  updateCategory() {
    this.resolutionSevice.updateCategory(this.id, this.category)
      .subscribe(data => console.log(data), error => console.log(error));
    this.category = new CategoryDTOrequest();

    this.gotoList();
}
  reloadData(){
  this.resolutionSevice.getResolutionList();
}
}
