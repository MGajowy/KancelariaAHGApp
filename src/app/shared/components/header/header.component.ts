import { Routes, Router } from '@angular/router';
import { AuthServiceService } from './../../../core/services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class  HeaderComponent implements OnInit {

  czyZalogowany: boolean ;
  nazwaPrzysiku = '';
  zalogujText = 'Zaloguj';
  wylogujText = 'Wyloguj';

  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit() {
    if (this.authService.isUserLoggedIn()) {
      this.nazwaPrzysiku = this.wylogujText;
    }else{
      this.nazwaPrzysiku = this.zalogujText;
    }

  }

  wybor(){
    this.czyZalogowany = this.authService.isUserLoggedIn();
    if (this.czyZalogowany){
     return this.wyloguj();
    }else {
    return this.zaloguj();
    }
  }

  zaloguj() {
  this.router.navigate(['login']);
  }

  wyloguj(){
    this.router.navigate(['logout']);
  }

}


