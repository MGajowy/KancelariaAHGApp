import { Routes, Router } from '@angular/router';
import { AuthServiceService } from './../../../core/services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  adminRole: boolean = false;
  listRoles: any;
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
      this.checkRole();
    } else {
      this.nameButton = this.loginText;
    }

  }

  checkRole(): boolean {
    this.authService.getRoles().subscribe(res => {
      this.listRoles = res;
      this.listRoles.forEach(element => {
        if (element == 'ADMIN') {
          this.adminRole = true;
        }
      });
    })
    return this.adminRole;
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


