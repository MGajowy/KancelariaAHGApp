import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResolutionService } from '../../service/resolution.service';
import { CategoryListDTO } from './../../../../generated/REST';
import { ResolutionRequestDTO } from 'src/app/generated/ResolutionRequestDTO';

interface Choise {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modify-resolution',
  templateUrl: './modify-resolution.component.html',
  styleUrls: ['./modify-resolution.component.css']
})
export class ModifyResolutionComponent implements OnInit {

  id: number;
  resolution: ResolutionRequestDTO;
  category: CategoryListDTO;
  list: Choise[] = [
    { value: 'true', viewValue: 'TAK' },
    { value: 'false', viewValue: 'NIE' },
  ]

  constructor(
    private router: Router,
    private resolutionService: ResolutionService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.categoryList();
    this.resolution = new ResolutionRequestDTO();

    this.id = this.route.snapshot.params['id'];
    this.resolutionService.detailsResolution(this.id)
      .subscribe(data => {
        this.resolution.isPublic = data.isPublic;
        this.resolution.resolutionName = data.resolutionName;
        this.resolution.contents = data.contents;
      },
        error => console.log(error));
  }

  private categoryList() {
    this.resolutionService.getResolutionList().subscribe(result => {
      this.category = result;
    });
  }

  onSubmit() {
    this.updateResolution();
  }

  updateResolution() {
    this.resolutionService.updateResolution(this.id, this.resolution)
      .subscribe(data => console.log(data), error => console.log(error));
    this.resolution = new ResolutionRequestDTO();
    this.goToListResolution();
  }
  reloadData() {
    this.resolutionService.getResolutionList();
  }

  goToListResolution() {
    this.reloadData();
    this.router.navigate(['/office/list-resolutions']);
  }

}
