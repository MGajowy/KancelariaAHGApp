import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestService } from 'src/app/core/services/rest/rest.service';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient, private restService: RestService) { }

  getOrderList(term, pageNumber: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('term', term)
    return this.httpClient.get(`${baseUrl}rest/administracja/secured/order/${pageNumber}/${pageSize}`, { params });
  }

  detailsOrder(id: number): Observable<any> {
    return this.httpClient.get(`${baseUrl}rest/administracja/secured/order/${id}`);
  }

  createOrder(order: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}rest/administracja/secured/order/`, order, { observe: 'response' })
      .pipe(map(data => {
        return data.status;
      }));
  }

  updateOrder(id: number, value: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}rest/administracja/secured/order/${id}`, value, {observe: 'response'})
    .pipe(map(data => {
      return data.status;
    }));
  }

  deleteOrder(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}rest/administracja/secured/order/${id}`, {observe: 'response'})
    .pipe(map(data => {
      return data.status;
    }));
  }

  closeOrder(order: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}rest/administracja/secured/orderDateEnd/`, order, { observe: 'response' })
      .pipe(map(data => {
        return data.status;
      }));
  }

}
