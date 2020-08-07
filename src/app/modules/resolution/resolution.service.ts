
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ResolutionService {

 private baseUrl = 'http://localhost:8020/kategorie/wszystkieKategorie';

  constructor(private http: HttpClient ) { }

  // getResolutionList(): Observable<any> {
  //   return this.http.get(`${baseUrl}kategorie/wszystkieKategorie`);
  // }
  getResolutionList(): Observable<RootObject> {
    return this.http.get<RootObject>(`${this.baseUrl}`);
  }

}
export interface ListaKategorii {
  czyPubliczny: string;
  rodzajKategorii: string;
}

export interface RootObject {
  listaKategorii: ListaKategorii[];
}
