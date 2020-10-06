import { Observable } from 'rxjs';
import { CategoryDTO, CategoryListDTO } from './../../../../generated/REST';

import { ResolutionService } from '../../service/resolution.service';

import { Component, OnInit, Input } from '@angular/core';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resolution-kategory',
  templateUrl: './resolution-kategory.component.html',
  styleUrls: ['./resolution-kategory.component.scss']
})
export class ResolutionKategoryComponent implements OnInit {
  msgs: Message[] = [];
  position: string;
  listaKategorii: CategoryListDTO;

  constructor(private resolutionService: ResolutionService, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private router: Router) {}

    ngOnInit(): void {
    this.reloadData();
    console.log(this.listaKategorii);
  }
    reloadData() {
    this.resolutionService.getResolutionList().subscribe(value => {
     this.listaKategorii = value;
    });
  }

    deleteCategoryResolutions (id: number){
    this.resolutionService.deleteCategory(id)
    .subscribe(data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

  confirmPosition(position: string, id: number, nameCategory: string) {
    this.position = position;

    this.confirmationService.confirm({
        message: 'Czy chcesz usunac kategorie: ' + nameCategory +  '?',
        header: 'Usuwanie kategorii',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'OK.', detail:'Kategoria ' + nameCategory + ' została usunięta.'}];
            this.deleteCategoryResolutions(id);
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Anulowano usuwanie kategorii ' + nameCategory}];
        },
        key: "positionDialog"
    });
}

modifyCategory(id: number){
  this.router.navigate(['/kancelaria/modify-category', id]);

}

detailsCategory(id: number){
  this.router.navigate(['/kancelaria/category-detail', id]);
}

}
