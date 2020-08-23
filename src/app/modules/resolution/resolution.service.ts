import { HttpClient } from '@angular/common/http';
import { RestService } from './../../core/services/rest/rest.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ResolutionService {

// private baseUrl = 'http://localhost:8020/kategorie/wszystkieKategorie';

  constructor(private httpClient: HttpClient, private restService: RestService ) { }

  getResolutionList(): Observable<any> {
    return this.httpClient.get(`${baseUrl}kategorie/pub/wszystkieKategorie`);
  }

  //metoda przez wygenerowane resty z beckendu, implementacja poprzez SERVICE (ResrService)
  // getResolutionList(): Observable<RootObject> {
  //   return this.restService.wszystkieRestAdmin().pobierzListCategoryDto();
  // }
}
export interface ListaKategorii {
  czyPubliczny: string;
  rodzajKategorii: string;
}

export interface RootObject {
  listaKategorii: ListaKategorii[];
}
