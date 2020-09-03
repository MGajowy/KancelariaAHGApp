import { ErrorInterceptorService } from './core/services/error-interceptor/error-interceptor.service';
import { AuthInterceptorService } from './core/services/auth-interceptor/auth-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
import { DefaultModule } from './layouts/default/default.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS,
       useClass: ErrorInterceptorService,
        multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
