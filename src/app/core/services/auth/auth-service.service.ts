

// import { baseUrl } from './../../../../environments/environment';
import { baseUrl } from 'src/environments/environment';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserPasswordDTO } from 'src/app/generated/REST';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) {
    return this.httpClient.post<any>(`${baseUrl}rest/authenticate`, { username, password }).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          const tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      )

    );
  }


  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  getUser() {
    const user = sessionStorage.getItem('username');
    return user;
  }

  logOut() {
    sessionStorage.removeItem('username')
    //sessionStorage.removeItem('token')
  }

  checkTokenSetPassword(token: string): Observable<any> {
    return this.httpClient.get<any>(`${baseUrl}rest/uzytkownicy/pub/weryfikuj-token/${token}`);
  }

  setNewPassword(dto: UserPasswordDTO): Observable<any> {
    return this.httpClient.post<any>(`${baseUrl}rest/ustaw-haslo`, dto);

  }

  resetPassword(dto: UserPasswordDTO): Observable<any> {
    return this.httpClient.post<any>(`${baseUrl}rest/reset-hasla`, dto);
  }

}
