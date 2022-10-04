import { Component, OnInit } from '@angular/core';
import { RegulationService} from '../../service/regulation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDTOrequest } from 'src/app/generated/REST';

@Component({
  selector: 'app-details-regulation-category',
  templateUrl: './details-regulation-category.component.html',
  styleUrls: ['./details-regulation-category.component.scss']
})
export class DetailsRegulationCategoryComponent implements OnInit {

  id: number;
  category: CategoryDTOrequest;

  constructor(private route: ActivatedRoute, private router: Router, private regulationService: RegulationService) { }

  ngOnInit() {
    this.category = new CategoryDTOrequest();
    this.id = this.route.snapshot.params['id'];

    this.regulationService.detailsCategory(this.id)
    .subscribe(data => {
      this.category = data;
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['/kancelaria/category-regulations'])
  }

}
