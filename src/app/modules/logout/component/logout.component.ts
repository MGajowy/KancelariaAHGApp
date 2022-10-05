import { AuthServiceService } from './../../../core/services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthServiceService, private route: Router) { }

  ngOnInit() {
  this.authService.logOut();
  this.route.navigate(['/office/home']);
  }

}
