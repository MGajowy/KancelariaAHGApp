
import { HttpClient, HttpParams } from '@angular/common/http';
import { RestService } from '../../../core/services/rest/rest.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DocumentService {

  constructor(private httpClient: HttpClient, private restService: RestService) { }

  getDocumentList(term, pageNumber: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('term', term)
    return this.httpClient.get(`${baseUrl}rest/document/pub/documentList/${pageNumber}/${pageSize}`, { params });
  }

  getDocumentListForUser(id: number, pageNumber: number, pageSize: number, term, status): Observable<any> {
    const params = new HttpParams()
      .set('term', term)
      .set('status', status)
    return this.httpClient.get(`${baseUrl}rest/document/secured/documentListForUser/${id}/${pageNumber}/${pageSize}`, { params }); 
  }

  downloadDocument(id: number): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/document/pub/download/${id}`, {observe: 'response', responseType: 'blob'});
  }

  deleteDocument(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}rest/document/secured/delete/${id}`, {observe: 'response' }).pipe(map(data => {return data.status}));
  }

  uploadDocument(file: File, userId): Observable<any> {
    const doc: FormData = new FormData();
    doc.append('file', file);
    const params = new HttpParams()
      .set('userId', userId);
    return this.httpClient.post(`${baseUrl}rest/document/secured/upload`, doc, {params, observe: 'response' })
      .pipe(map(data => {
        return data.status;
      }));
  }
}
