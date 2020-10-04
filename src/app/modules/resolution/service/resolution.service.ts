import { HttpClient } from '@angular/common/http';
import { RestService } from '../../../core/services/rest/rest.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { CategoryDTO } from 'src/app/generated/REST';



@Injectable({
  providedIn: 'root'
})
export class ResolutionService {


// private baseUrl = 'http://localhost:8020/kategorie/wszystkieKategorie';

  constructor(private httpClient: HttpClient, private restService: RestService ) { }

  // getStryng(){

  //   return this.restService.wszystkieRestAdmin().getStr();
  // }
  getResolutionList(): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/kategorie/pub/wszystkieKategorie`);
  }
 // metoda przez wygenerowane resty z beckendu, implementacja poprzez SERVICE (RestService)
  // getResolutionList(): Observable<any> {
  //   return this.restService.wszystkieRestAdmin().pobierzListCategoryDto();
  // }

  deleteCategory(id: number): Observable <any>{
    return this.httpClient.delete(`${baseUrl}rest/kategorie/secured/usun-kategorie/${id}`);
  }

  createCategory(categoryDTO: CategoryDTO): Observable <any>{
    return this.httpClient.post(`${baseUrl}rest/kategorie/secured/dodaj-kategorie`, categoryDTO);
  }

}
