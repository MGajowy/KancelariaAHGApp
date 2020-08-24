import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TSAllRestApiClient } from 'src/app/generated/DTO';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  private restApiAdmin: TSAllRestApiClient;

  constructor(private httpClient: HttpClient) { }


  wszystkieRestAdmin() {
    if (!this.restApiAdmin)
    this.restApiAdmin = new TSAllRestApiClient(this.httpClient);
    return this.restApiAdmin;
  }
}