import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/core/services/rest/rest.service';
import { EventLogListDTO } from 'src/app/generated/REST';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventLogService {

constructor(private httpClient: HttpClient, private restService: RestService ) { }

getEventLogList(): Observable<any> {
  return this.httpClient.get(`${baseUrl}rest/administracja/secured/dziennikZdarzen`)
}
}
