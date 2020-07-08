import { baseUrl } from './../../../../environments/environment';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  login(data): Observable<any>{
    console.log("logowanie");
    return this.http.post( `${baseUrl}user/login`, data);
  }
}
