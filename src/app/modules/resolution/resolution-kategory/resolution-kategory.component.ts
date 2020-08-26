import { Component, OnInit } from '@angular/core';
import { RootObject, ResolutionService } from '../services/resolution.service';

@Component({
  selector: 'app-resolution-kategory',
  templateUrl: './resolution-kategory.component.html',
  styleUrls: ['./resolution-kategory.component.scss']
})
export class ResolutionKategoryComponent implements OnInit {

  listaKategorii: RootObject;

  constructor(private resolutionService: ResolutionService) {}

    ngOnInit(): void {
    this.reloadData();
    console.log(this.listaKategorii);
  }
    reloadData() {
    this.resolutionService.getResolutionList().subscribe(value => {
    this.listaKategorii = value;
    console.log(value);

    });
  }


}
