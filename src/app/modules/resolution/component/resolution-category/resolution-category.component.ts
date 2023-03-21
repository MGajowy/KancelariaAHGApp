import { Observable } from 'rxjs';
import { CategoryDTO, CategoryDTOrequest, CategoryListDTO } from '../../../../generated/REST';
import { ResolutionService } from '../../service/resolution.service';

import { Component, OnInit, Input } from '@angular/core';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-resolution-category',
  templateUrl: './resolution-category.component.html',
  styleUrls: ['./resolution-category.component.scss']
})
export class ResolutionCategoryComponent implements OnInit {
  msgs: Message[] = [];
  position: string;
  categorylist: CategoryListDTO;
  listCategory: CategoryDTO[];
  term: FormControl;
  checked: boolean = true;
  category: CategoryDTOrequest;

  constructor(
    private resolutionService: ResolutionService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private router: Router) { }

  ngOnInit() {
    this.wyszukiwarkaKategorii();
  }

  private wyszukiwarkaKategorii(): void {
    this.term = new FormControl('');
     this.reloadData();
    this.term.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(() => {
      this.reloadData();

    })
  }

  reloadData() {
    this.resolutionService.getResolutionCategoryListOfTerm(this.term.value)
    .subscribe(res => {
      this.listCategory = res.categoryList;
    });
  }

  deleteCategoryResolutions(id: number) {
    this.resolutionService.deleteCategory(id)
      .subscribe(data => {
        this.reloadData();
      },
        error => console.log(error));
  }

  confirmPosition(position: string, id: number, nameCategory: string) {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Czy chcesz usunac kategorie: ' + nameCategory + '?',
      header: 'Usuwanie kategorii',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.msgs = [{ severity: 'info', summary: 'OK.', detail: 'Kategoria ' + nameCategory + ' została usunięta.' }];
        this.deleteCategoryResolutions(id);
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Anulowano usuwanie kategorii ' + nameCategory }];
      },
      key: "positionDialog"
    });
  }

  modifyCategory(id: number) {
    this.router.navigate(['/office/modify-category', id]);
  }

  modifyStatusCategory(id: number, category: CategoryDTOrequest ) {
    this.category = new CategoryDTOrequest();
    this.category.categoryName = category.categoryName;
    this.category.isPublic = category.isPublic;
    this.resolutionService.updateCategory(id, this.category)
  }

  detailsCategory(id: number) {
    this.router.navigate(['/office/category-detail', id]);
  }

}
