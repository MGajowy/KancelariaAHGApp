import { HttpClient, HttpParams } from '@angular/common/http';
import { RestService } from '../../../core/services/rest/rest.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';
import { CategoryDTO, CreateResotutionDTO } from 'src/app/generated/REST';
import { ResolutionRequestDTO } from 'src/app/generated/ResolutionRequestDTO';

@Injectable({
  providedIn: 'root'
})
export class ResolutionService {

  constructor(private httpClient: HttpClient, private restService: RestService) { }

  getResolutionList(): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/kategorie/pub/wszystkieKategorie`);
  }

  getResolutionCategoryListOfTerm(term): Observable<any> {
    const params = new HttpParams()
      .set('term', term)
    return this.httpClient.get(`${baseUrl}rest/kategorie/pub/wyszukajKategorie`, { params })
  }

  deleteCategory(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}rest/kategorie/secured/usun-kategorie/${id}`);
  }

  createCategory(categoryDTO: CategoryDTO): Observable<any> {
    return this.httpClient.post(`${baseUrl}rest/kategorie/secured/dodaj-kategorie`, categoryDTO, { observe: 'response' })
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
    return this.httpClient.post(`${baseUrl}rest/uchwaly/secured/dodaj-uchwale`, resolutionDTO, { observe: 'response' });
  }

  updateResolution(id: number, resolutionDTO: ResolutionRequestDTO): Observable<any> {
    return this.httpClient.put(`${baseUrl}rest/uchwaly/secured/modyfikuj-uchwale/${id}`, resolutionDTO);
  }

  deleteResolution(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}rest/uchwaly/secured/usun-uchwale/${id}`, { observe: 'response' });
  }

  getResolutionsAll(): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/uchwaly/pub/listaUchwal`);
  }

  getResolutionOfDescription(term): Observable<any> {
    const params = new HttpParams()
      .set('term', term)
    return this.httpClient.get(`${baseUrl}rest/uchwaly/pub/listaUchwalWgNazwa`, { params })
  }

  getResolutionOfDescriptionAndPagination(term, pageNumber: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('term', term)
    return this.httpClient.get(`${baseUrl}rest/uchwaly/pub/listaUchwalWgNazwa/${pageNumber}/${pageSize}`, { params })
  }

  detailsResolution(id: number): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/uchwaly/secured/szczegoly-uchwaly/${id}`);
  }

  // metoda przez wygenerowane resty z beckendu, implementacja poprzez SERVICE (RestService)
  // getResolutionList(): Observable<any> {
  //   return this.restService.wszystkieRestAdmin().pobierzListCategoryDto();
  // }

}

