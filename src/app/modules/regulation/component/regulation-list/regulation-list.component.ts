import { Component, OnInit } from '@angular/core';
import { RegulationListDTO, RegulationDTO } from './../../../../generated/REST';
import { RegulationService} from '../../service/regulation.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-regulation-list',
  templateUrl: './regulation-list.component.html',
  styleUrls: ['./regulation-list.component.scss']
})
export class RegulationListComponent implements OnInit {

  regulationList: RegulationListDTO;
  regulation: RegulationDTO;
  message: String = 'Lista rozporządzeń jest pusta.'
  term: FormControl;
  pageSize: number = 5;
  pageNumber: number = 0;
  totalRecords: number = 0;

  constructor (
    private regulationService: RegulationService,
    ) { }

  ngOnInit(): void {
      this.wyszukiwarkaRozporzadzen();
  }

  private wyszukiwarkaRozporzadzen() : void {
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
    this.regulationService.getRegulationOfDescriptionAndPagination(this.term.value, this.pageNumber, this.pageSize).subscribe(res => {
      this.regulationList = res;
      this.totalRecords = res.totalRecords;
    })
  }

  paginate(event) {
    this.pageNumber = event.page;
    this.pageSize = event.rows;
    this.reloadData();
    console.log(this.pageNumber) 
  }

}
