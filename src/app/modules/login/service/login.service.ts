import { ResetPasswordDTO } from './../../../generated/REST';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from 'src/app/core/services/rest/rest.service';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private restService: RestService) { }

  // Login(loginDTO: LoginDTO ): Observable<any> {
  //   return this.httpClient.post(`${baseUrl}rest/authenticate`, loginDTO);
  // }

  sendResetPassword(dto: ResetPasswordDTO): Observable<any>{
    return this.httpClient.post(`${baseUrl}rest/uzytkownicy/pub/reset-hasla`, dto);
  }
}
