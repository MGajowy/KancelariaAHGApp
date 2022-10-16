import { Routes, Router } from '@angular/router';
import { AuthServiceService } from './../../../core/services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;
  nameButton = '';
  user = '';
  loginText = 'Zaloguj';
  logoutText = 'Wyloguj';

  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit() {

    if (this.authService.isUserLoggedIn()) {
      this.user = this.authService.getUser();
      this.nameButton = this.logoutText + " " + this.user;
    } else {
      this.nameButton = this.loginText;
    }

  }

  checkMethod() {
    this.isLogged = this.authService.isUserLoggedIn();
    if (this.isLogged) {
      return this.logout();
    } else {
      return this.login();
    }
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.router.navigate(['logout']);
  }

}


