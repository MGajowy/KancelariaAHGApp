import { UserPasswordDTO } from './../../../../../generated/REST';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Password } from 'primeng';
import { LocationDTO } from 'src/app/generated/REST';
import { AuthServiceService } from 'src/app/core/services/auth/auth-service.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {

  dto = new UserPasswordDTO();
  formGroup: FormGroup;
  token: string;
  private destroy$: Subject<boolean>;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthServiceService) {
    this.destroy$ = new Subject<boolean>();
    route.queryParams.pipe(takeUntil(this.destroy$))
    .subscribe(res => {
      this.token = res['token'];
      // this.authService.checkTokenSetPassword(this.token);
      console.log(this.token);
    });
    }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
this.formGroup = new FormGroup({
  password_1: new FormControl('', [Validators.required, Validators.minLength(6)]),
  password_2: new FormControl('', [Validators.required, Validators.minLength(6)]),
});
  }

  setPassword(){

    //todo dodac porownanie dwoch hasel czy sa identyczne !!! 
    if (this.formGroup.valid){
      this.dto.token = this.token;
      this.dto.password = this.formGroup.get('password_1').value;
      this.authService.setNewPassword(this.dto).subscribe(res =>
        {
          this.dto = res;
          this.router.navigate(['login']);
        });
    }else{
      this.router.navigate(['logout']);
    }

  }
}
