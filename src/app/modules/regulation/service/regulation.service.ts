import { HttpClient, HttpParams } from '@angular/common/http';
import { RestService } from '../../../core/services/rest/rest.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { CategoryDTO, CategoryDTOrequest, CreateRegulationDTO } from 'src/app/generated/REST';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {


  constructor(private httpClient: HttpClient, private restService: RestService) { }

  getRegulationCategoryList(): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/kategorieRozporzadzen/pub/wszystkieKategorieRozporzadzen`);
  }

  getRegulationCategoryListOfTerm(term): Observable<any> {
    const params = new HttpParams()
    .set('term', term)
    return this.httpClient.get(`${baseUrl}rest/kategorieRozporzadzen/pub/wyszukajKategorieRozporzadzeniaPoNazwa`, { params })
  }

  deleteCategory(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}rest/kategorieRozporzadzen/secured/usun-kategorie/${id}`);
  }

  createCategory(categoryDTO: CategoryDTO): Observable<any> {
    return this.httpClient.post(`${baseUrl}rest/kategorieRozporzadzen/secured/dodaj-kategorie`, categoryDTO);
  }

  updateCategory(id: number, value: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}rest/kategorieRozporzadzen/secured/modyfikuj-kategorie/${id}`, value);
  }

  detailsCategory(id: number): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/kategorieRozporzadzen/secured/szczegoly-kategorii/${id}`);
  }

  createRegulation(regulationDTO: CreateRegulationDTO): Observable<any> {
    return this.httpClient.post(`${baseUrl}rest/rozporzadzenia/secured/dodaj-rozporzadzenie`, regulationDTO);
  }

  // updateResolution(id: number, resolutionDTO: ResolutionDTO): Observable<any> {
  //   return this.httpClient.put(`${baseUrl}rest/uchwaly/secured/modyfikuj-uchwale/${id}`, resolutionDTO);
  // }

  // deleteResolution(id: number): Observable<any> {
  //   return this.httpClient.delete(`${baseUrl}rest/uchwaly/secured/usun-uchwalee/${id}`);
  // }

  // getResolutionsAll(): Observable<any> {
  //   return this.httpClient.get(`${baseUrl}rest/uchwaly/pub/listaUchwal`);
  // }

  getResolutionOfDescription(nazwa) : Observable<any> {
    const params = new HttpParams()
    .set('nazwa', nazwa)
    return this.httpClient.get(`${baseUrl}rest/rozporzadzenia/pub/listaRozporzadzenWgOpis`, { params })
  }

}
