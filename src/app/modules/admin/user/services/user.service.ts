import { RegistrationDTO, AddUserDTO, UserDTO, LocationDTO } from './../../../../generated/REST';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RestService } from 'src/app/core/services/rest/rest.service';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private restService: RestService) { }



  getUserList(term): Observable<any> {
    const params = new HttpParams()
      .set('term', term);
    return this.httpClient.get(`${baseUrl}rest/uzytkownicy/secured/listaUzytkownikow`, { params });
  }

  getUserListByNameAndPage(term, pageNumber: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('term', term)
    return this.httpClient.get(`${baseUrl}rest/uzytkownicy/secured/listaUzytkownikow/${pageNumber}/${pageSize}`, { params })
  }
  
  // metoda przez restService
  // getUserList(term): Observable<any> {
  //   console.log(this.restService.wszystkieRestAdmin().getUserList(term));
      // const params = new HttpParams()
      // .set('term', term);
  //   return this.restService.wszystkieRestAdmin().getUserList({term});
  // }

  register(user: RegistrationDTO): Observable<any> {
    return this.httpClient.post(`${baseUrl}rest/register`, user, {observe: 'response'});
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`${baseUrl}rest/uzytkownicy/secured/usun-uzytkownika/${id}`, {observe: 'response'});
  }

  addUser(user: AddUserDTO): Observable<any> {
    return this.httpClient.post(`${baseUrl}rest/uzytkownicy/secured/dodaj-uzytkownika`, user, {observe: 'response'});
  }

  activateUser(loca: LocationDTO): Observable<any> {
    return this.httpClient.post(`${baseUrl}rest/uzytkownicy/secured/wyslij-email-aktywacyjny`, loca);
  }

  unActivateUser(id: number): Observable<any> {
    return this.httpClient.post(`${baseUrl}rest/uzytkownicy/secured/dezaktywuj-uzytkownika/${id}`, id);
  }

  updateUser(id: number, value: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}rest/uzytkownicy/secured/modyfikuj-uzytkownika/${id}`, value, {observe: 'response'});
  }

  detailsUser(id: number): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/uzytkownicy/secured/szczegoly-uzytkownika/${id}`);
  }
}
