import { AuthServiceService } from './../../core/services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  loginProces() {
    if (this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result => {
        if (result.success){
          console.log(result);
          alert(result.message);
        }else {
          alert(result.message);
        }
      });
    }
  }

}
