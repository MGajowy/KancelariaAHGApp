import { AuthServiceService } from './../../../core/services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthServiceService,
     private router: Router,
     private messageService: MessageService,
     private primengConfig: PrimeNGConfig
     ) { }

  ngOnInit() {
        this.showSuccessMessage();
    this.primengConfig.ripple = true;
    this.authService.logOut();

  setTimeout(() => {
    this.router.navigate(['office/home'])
  }, 3000);
  }

  showSuccessMessage() {
    this.messageService.add({severity:'success', summary:'Wylogowany.', detail:'Za chwilę zostaniesz przekierowny na stronę główną.'});
  }

}
