import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';

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
}
