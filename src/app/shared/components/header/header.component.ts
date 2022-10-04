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
  nazwaPrzycisku = '';
  uzytkownik ='';
  zalogujText = 'Zaloguj';
  wylogujText = 'Wyloguj';

  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit() {

    if (this.authService.isUserLoggedIn()) {
      this.uzytkownik = this.authService.getUser();
      this.nazwaPrzycisku = this.wylogujText + " " +  this.uzytkownik;
    }else{
      this.nazwaPrzycisku = this.zalogujText;
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


