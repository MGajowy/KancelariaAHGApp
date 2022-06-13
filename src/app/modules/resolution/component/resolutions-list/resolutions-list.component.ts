import { Component, OnInit } from '@angular/core';
import { ResolutionService } from '../../service/resolution.service';
import { ResolutionListDTO, ResolutionDTO } from './../../../../generated/REST';

@Component({
  selector: 'app-resolutions-list',
  templateUrl: './resolutions-list.component.html',
  styleUrls: ['./resolutions-list.component.scss']
})
export class ResolutionsListComponent implements OnInit {

  lista: ResolutionListDTO;
  uchwaly: ResolutionDTO;
  komunikat: String = 'Lista uchwał jest pusta.'

  constructor (
    private resolutionService: ResolutionService
    ) { }

  ngOnInit(): void {
    this.resolutionService.getResolutionsAll().subscribe(res => 
      this.lista = res);
  }

}
