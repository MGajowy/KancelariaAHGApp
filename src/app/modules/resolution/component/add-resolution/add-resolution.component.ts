import { CategoryListDTO } from './../../../../generated/REST';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateResotutionDTO } from 'src/app/generated/REST';
import { UserService } from 'src/app/modules/admin/user/services/user.service';
import { ResolutionService } from '../../service/resolution.service';

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
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private resolutionServices: ResolutionService

  ) { }

  ngOnInit() {
    this.categoryList();
    this.resolution.czyPubliczny = true;
    // this.resolutionForm = this.formBuilder.group({
    //   opis: ['', Validators.required],
    //   tresc: ['', Validators.required],
    //   kategoria: ['', Validators.required],
    //   czyPubliczny: ['', Validators.required],
    // });
  }

  newResolution(): void
  {
    this.submitted = false;
    this.resolution = new CreateResotutionDTO;
  }

  save(){
    this.resolutionServices.createResolution(this.resolution)
      .subscribe(data => {
        this.submitted = true;
      },
      error => console.log(error));
       this.resolution = new CreateResotutionDTO;
  }
  onSubmit(){
    this.save();
  }

  private categoryList() {
    this.resolutionServices.getResolutionList().subscribe(value => {
      this.category = value;
    });
  }

  // onSubmit() {
  //   this.submitted = true;

  //   if (this.resolutionForm.invalid) {
  //     alert('Uzupełnij pola wymagane zanaczone na kolor czerwony')
  //     return;
  //   } else {
  //     this.resolutionServices.createResolution(
  //       this.resolutionForm.value)
  //       .subscribe(result => {
  //         if (result.success) {
  //           console.log(result);
  //         } else {
  //           this.router.navigate(['']);
  //         }
  //       });
  //     alert('Uzytkownik zostal dodany do listy uzytkownikow')
  //     this.router.navigate(['office/user-list']);
  //   }
  // }

}
