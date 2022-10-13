import { Component, OnInit } from '@angular/core';
import { ResolutionService } from '../../service/resolution.service';
import { ResolutionListDTO, ResolutionDTO } from './../../../../generated/REST';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-resolutions-list',
  templateUrl: './resolutions-list.component.html',
  styleUrls: ['./resolutions-list.component.scss']
})
export class ResolutionsListComponent implements OnInit {

  resolutionList: ResolutionListDTO;
  resolution: ResolutionDTO;
  message: String = 'Lista uchwał jest pusta.'
  term: FormControl;

  constructor (
    private resolutionService: ResolutionService,
    ) { }

  ngOnInit(): void {
      this.wyszukiwarkaUchwal();
  }

  private wyszukiwarkaUchwal() : void {
    this.term = new FormControl('');
    this.reloadData();
    this.term.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(() => {
        this.reloadData();
      })
  }

  reloadData() {
    this.resolutionService.getResolutionOfDescription(this.term.value).subscribe(res => {
      this.resolutionList = res;
    })
  }

}
