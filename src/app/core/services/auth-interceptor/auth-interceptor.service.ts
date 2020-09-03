import { Observable } from 'rxjs';
import { AuthServiceService } from './../auth/auth-service.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthServiceService) { }

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      } )
    }

    return next.handle(req);

  }
}
