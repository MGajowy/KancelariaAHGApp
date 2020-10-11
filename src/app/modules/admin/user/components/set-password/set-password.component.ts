import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Password } from 'primeng';
import { LocationDTO } from 'src/app/generated/REST';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
this.formGroup = new FormGroup({
  password_1: new FormControl('', [Validators.required, Validators.minLength(6)]),
  password_2: new FormControl('', [Validators.required, Validators.minLength(6)])
});
  }

  setPassword(){
    if (this.formGroup.valid){
      //todo dodać resta jwt i hasło przekazc na backend !!
      this.router.navigate(['login']);
    }else{
      this.router.navigate(['logout']);
    }

  }
}
