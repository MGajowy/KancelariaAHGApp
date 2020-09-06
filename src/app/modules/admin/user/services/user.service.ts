import { RegistrationDTO } from './../../../../generated/REST';
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

  register(user: RegistrationDTO): Observable<any> {
    return this.httpClient.post(`${baseUrl}rest/register`, user);
  }
//todo dodać poprawny path !!
  // deleteUser(id: number): Observable <any>{
  //   return this.httpClient.delete(`${baseUrl}rest/uzytkownicy/secured/usun-..../${id}`);
  // }
}
