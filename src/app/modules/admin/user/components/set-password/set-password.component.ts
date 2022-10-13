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
  private password_1: string;
  private password_2: string;


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

  initForm() {
    this.formGroup = new FormGroup({
      password_1: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password_2: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  setPassword() {

    this.password_1 = this.formGroup.get('password_1').value;
    this.password_2 = this.formGroup.get('password_2').value;

    if (this.formGroup.valid && this.password_1 === this.password_2) {
        this.dto.token = this.token;
        this.dto.password = this.formGroup.get('password_1').value;
        this.authService.setNewPassword(this.dto).subscribe(res => {
          this.dto = res;
          alert('Nowe hasło zostało ustawione. Zaloguj się do portalu.');
          this.router.navigate(['login']);
        });
      } else {
        alert('Sprawdź poprawność haseł...');
      }

  }
}
