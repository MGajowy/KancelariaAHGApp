import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message } from 'primeng/api';
import { CategoryDTO, CategoryListDTO } from './../../../../generated/REST';
import { RegulationService} from '../../service/regulation.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-regulation-category',
  templateUrl: './regulation-category.component.html',
  styleUrls: ['./regulation-category.component.scss']
})
export class RegulationCategoryComponent implements OnInit {

  msgs: Message[] = [];
  position: string;
  category: CategoryListDTO;
  listCategory: CategoryDTO[];
  term: FormControl;
  checked: boolean = true;

  constructor(
    private regulationService: RegulationService,
    private confirmationService: ConfirmationService,
    private router: Router) { }

  ngOnInit(): void {
    this.wyszukiwarkaKategorii();
  }

  private wyszukiwarkaKategorii(): void {
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
    this.regulationService.getRegulationCategoryListOfTerm(this.term.value).subscribe(res => {
      this.listCategory = res.categoryList;
    });
  }

  deleteCategoryRegulations(id: number) {
    this.regulationService.deleteCategory(id)
      .subscribe(data => {
        this.reloadData();
      },
        error => console.log(error));
  }

  modifyCategory(id: number) {
    this.router.navigate(['/office/modify-regulation-category', id]);

  }

  detailsCategory(id: number) {
    this.router.navigate(['/office/detail-regulation-category', id]);
  }

  confirmPosition(position: string, id: number, nameCategory: string) {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Czy chcesz usunac kategorie: ' + nameCategory + '?',
      header: 'Usuwanie kategorii',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.msgs = [{ severity: 'info', summary: 'OK.', detail: 'Kategoria ' + nameCategory + ' została usunięta.' }];
        this.deleteCategoryRegulations(id);
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Anulowano usuwanie kategorii ' + nameCategory }];
      },
      key: "positionDialog"
    });
  }

}
