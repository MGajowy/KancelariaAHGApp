import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getJudgments(): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/saos/pub/judgments`)
  }
}
