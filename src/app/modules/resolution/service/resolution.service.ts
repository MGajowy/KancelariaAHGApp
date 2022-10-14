import { HttpClient, HttpParams } from '@angular/common/http';
import { RestService } from '../../../core/services/rest/rest.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';
import { CategoryDTO, CategoryDTOrequest, CreateResotutionDTO, ResolutionDTO } from 'src/app/generated/REST';

@Injectable({
  providedIn: 'root'
})
export class ResolutionService {


  // private baseUrl = 'http://localhost:8020/kategorie/wszystkieKategorie';

  constructor(private httpClient: HttpClient, private restService: RestService) { }

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

  getResolutionCategoryListOfTerm(term): Observable<any> {
    const params = new HttpParams()
    .set('term', term)
    return this.httpClient.get(`${baseUrl}rest/kategorie/pub/wyszukajKategorie`, { params })
  }

  deleteCategory(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}rest/kategorie/secured/usun-kategorie/${id}`);
  }

  createCategory(categoryDTO: CategoryDTO): Observable<any> {
    return this.httpClient.post(`${baseUrl}rest/kategorie/secured/dodaj-kategorie`, categoryDTO, {observe: 'response'})
    .pipe(map(data => {
      return data.status;
    }));
  }

  updateCategory(id: number, value: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}rest/kategorie/secured/modyfikuj-kategorie/${id}`, value);
  }

  detailsCategory(id: number): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/kategorie/secured/szczegoly-kategorii/${id}`);
  }

  createResolution(resolutionDTO: CreateResotutionDTO): Observable<any> {
    return this.httpClient.post(`${baseUrl}rest/uchwaly/secured/dodaj-uchwale`, resolutionDTO, {observe: 'response'});
  }

  updateResolution(id: number, resolutionDTO: ResolutionDTO): Observable<any> {
    return this.httpClient.put(`${baseUrl}rest/uchwaly/secured/modyfikuj-uchwale/${id}`, resolutionDTO);
  }

  deleteResolution(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}rest/uchwaly/secured/usun-uchwalee/${id}`);
  }

  getResolutionsAll(): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/uchwaly/pub/listaUchwal`);
  }

  getResolutionOfDescription(opis) : Observable<any> {
    const params = new HttpParams()
    .set('opis', opis)
    return this.httpClient.get(`${baseUrl}rest/uchwaly/pub/listaUchwalWgOpis`, { params })
  }

}

