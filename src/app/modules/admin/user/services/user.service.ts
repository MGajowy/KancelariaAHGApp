import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/app/core/services/rest/rest.service';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private restService: RestService) { }

  getUserList(): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/uzytkownicy/secured/listaUzytkownikow`);
  }
  //metoda przez restService
  // getUserList(): Observable<any> {
  //   return this.restService.wszystkieRestAdmin().pobierzListeUzytkownikowDto();
  // }
}
