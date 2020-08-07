import { ResolutionService, RootObject } from './resolution.service';
import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.scss']
})

export class ResolutionComponent implements OnInit {

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

