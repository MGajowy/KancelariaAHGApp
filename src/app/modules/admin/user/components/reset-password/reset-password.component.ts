import { AuthServiceService } from 'src/app/core/services/auth/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserPasswordDTO } from 'src/app/generated/REST';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  formGroup: FormGroup;
  token: string;
  dto = new UserPasswordDTO();
  private destroy$: Subject<boolean>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthServiceService) {
      this.destroy$ = new Subject<boolean>();
      route.queryParams.pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.token =  res['token'];
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
            this.authService.resetPassword(this.dto).subscribe(res =>
              {
                this.dto = res;
                this.router.navigate(['login']);
              });
          }else{
            this.router.navigate(['logout']);
          }

        }

}
