import { CategoryListDTO } from './../../../../generated/REST';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateResotutionDTO } from 'src/app/generated/REST';
import { ResolutionService } from '../../service/resolution.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-resolution',
  templateUrl: './add-resolution.component.html',
  styleUrls: ['./add-resolution.component.scss']
})
export class AddResolutionComponent implements OnInit {

  resolution: CreateResotutionDTO = new CreateResotutionDTO();
  category: CategoryListDTO;
  submitted = false;
  resolutionForm: FormGroup;
  list: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private resolutionServices: ResolutionService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.categoryList();
    this.resolution.isPublic = true;
    // this.resolutionForm = this.formBuilder.group({
    //   opis: ['', Validators.required],
    //   tresc: ['', Validators.required],
    //   kategoria: ['', Validators.required],
    //   czyPubliczny: ['', Validators.required],
    // });
  }

  newResolution(): void {
    this.submitted = false;
    this.resolution = new CreateResotutionDTO;
  }

  save() {
    this.resolutionServices.createResolution(this.resolution)
      .subscribe(data => {
        if (data.status === 201) {
          this.showSuccessMessage();
        } else {
          this.showErrorMessage();
        }
        this.submitted = true;
      },
        error => console.log(error));
    this.resolution = new CreateResotutionDTO;
  }
  onSubmit() {
    if (this.resolution.categoryId == null || this.resolution.resolutionName == null
      || this.resolution.contents == null)
      this.showValidationMessage();
    else
      this.save();
  }

  private categoryList() {
    this.resolutionServices.getResolutionList().subscribe(value => {
      this.category = value;
    });
  }

  showSuccessMessage() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Dodano uchwałę.' });
  }

  showErrorMessage() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Błąd dodania uchwały.', detail: 'Skontaktuj się z administratorem' });
  }

  showValidationMessage() {
    this.messageService.add({ key: 'tc', severity: 'info', summary: 'Uzupełnij wymagane pola.' });
  }


}
