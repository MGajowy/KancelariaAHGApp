import { ResolutionService } from './resolution.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Resolution} from '../resolution/resolution';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.scss']
})
export class ResolutionComponent implements OnInit {

  listaKategorii: Observable<Resolution[]>;

  constructor(private resolutionService: ResolutionService) {}

    ngOnInit(): void {
    this.reloadData();
    console.log(this.listaKategorii);
  }
    reloadData() {
    this.listaKategorii = this.resolutionService.getResolutionList();
    return this.listaKategorii;
  }

}

