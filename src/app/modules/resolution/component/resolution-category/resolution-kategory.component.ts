import { CategoryListDTO } from '../../../../generated/REST';
import { ResolutionService } from '../../service/resolution.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-resolution-kategory',
  templateUrl: './resolution-kategory.component.html',
  styleUrls: ['./resolution-kategory.component.scss']
})
export class ResolutionKategoryComponent implements OnInit {

  listaKategorii: CategoryListDTO;

  constructor(private resolutionService: ResolutionService) {}

    ngOnInit(): void {
    this.reloadData();
    console.log(this.listaKategorii);
  }
    reloadData() {
    this.resolutionService.getResolutionList().subscribe(value => {
    this.listaKategorii = value;
    //console.log(value);
    });
  }


}
