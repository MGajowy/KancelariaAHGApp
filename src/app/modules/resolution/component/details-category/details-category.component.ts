import { ResolutionService } from './../../service/resolution.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDTO } from 'src/app/generated/REST';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.scss']
})
export class DetailsCategoryComponent implements OnInit {

  id: number;
  category: CategoryDTO;

  constructor(private route: ActivatedRoute, private router: Router, private resolutionService: ResolutionService) { }

  ngOnInit() {
    this.category = new CategoryDTO();
    this.id = this.route.snapshot.params['id'];

    this.resolutionService.detailsCategory(this.id)
    .subscribe(data => {
      console.log(data);
      this.category = data;
    }, error => console.log(error));
}

  list(){
    this.router.navigate(['/office/category-resolutions']);

}
}
