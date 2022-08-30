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

  lista: RegulationListDTO;
  uchwaly: RegulationDTO;
  komunikat: String = 'Lista rozporzadzen jest pusta.'
  term: FormControl;

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
    this.regulationService.getResolutionOfDescription(this.term.value).subscribe(res => {
      this.lista = res;
    })
  }

}
