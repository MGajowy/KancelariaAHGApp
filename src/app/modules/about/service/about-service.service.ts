import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';
import { OnlineHelpRequestDto } from 'src/app/generated/REST';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {

  constructor(private http: HttpClient) { }

  getFiles() {
    return this.http.get<any>('assets/files.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
  }

  sendEmail(notification: OnlineHelpRequestDto): Observable<any> {
    return this.http.post(`${baseUrl}rest/pomocOnline/pub/wyslijPowiadomienie`, notification, { observe: 'response' }).pipe(map(data => {
      return data.status;
    }));
  }

}
