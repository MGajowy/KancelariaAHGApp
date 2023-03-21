import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RestService } from '../../../core/services/rest/rest.service';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { AddReputation, GetReputation } from 'src/app/generated/REST';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReputationService {

  constructor(private httpClient: HttpClient, private restService: RestService) { }

  getReputationList(): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/reputation/pub/getAll`);
  }

  getReputationById(getReputation: GetReputation): Observable<any> {
    return this.httpClient.post(`${baseUrl}rest/reputation/pub/getOne`, getReputation);
  }

  addReputation(addReputation: AddReputation): Observable<any> {
    return this.httpClient.post(`${baseUrl}rest/reputation/pub/addReputation`, addReputation, { observe: 'response' })
      .pipe(map(data => {
        return data.status;
      }));
  }

  addLikeReputation(id: number): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/reputation/pub/addLike/${id}`);
  }

  addNotLikeReputation(id: number): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/reputation/pub/addNotLike/${id}`);
  }

  deleteReputation(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}rest/reputation/secured/delete/${id}`, { observe: 'response' })
      .pipe(map(data => {
        return data;
      }));
  }
}
