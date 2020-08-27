/* tslint:disable */
/* eslint-disable */

import {Observable} from "rxjs";

export class CategoryDTO {
    czyPubliczny: OrPublic;
    rodzajKategorii: string;
}

export class CategoryListDTO {
    listaKategorii: CategoryDTO[];
}

export class UserListDTO {
    listaUzytkownikow: UserDTO[];
}

export class RegistrationDTO {
    imie: string;
    nazwisko: string;
    login: string;
    haslo: string;
    stan: UserStateEnum;
    email: string;
    telefon: string;
    plec: UserSexEnum;
}

export class UserOB {
    id: number;
    imie: string;
    nazwisko: string;
    login: string;
    haslo: string;
    email: string;
    telefon: string;
    plec: UserSexEnum;
    stan: UserStateEnum;
}

export class UserDTO {
    imie: string;
    nazwisko: string;
    login: string;
    haslo: string;
    stan: UserStateEnum;
    email: string;
    telefon: string;
    plec: UserSexEnum;
}

export interface HttpClient {

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; }): RestResponse<R>;
}

export class TSAllRestApiClient {

    constructor(protected httpClient: HttpClient) {
    }

    /**
     * HTTP GET /rest/kategorie/pub/1
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.pub.CategoryPublicRestApi.getStr
     */
    getStr(): RestResponse<string> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorie/pub/1` });
    }

    /**
     * HTTP GET /rest/kategorie/pub/wszystkieKategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.pub.CategoryPublicRestApi.pobierzListCategoryDto
     */
    pobierzListCategoryDto(): RestResponse<CategoryListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorie/pub/wszystkieKategorie` });
    }

    /**
     * HTTP POST /rest/uzytkownicy/secured/dodajUzytkownika
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.utworzUzytkownika
     */
    utworzUzytkownika(userOB: UserOB): RestResponse<any> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uzytkownicy/secured/dodajUzytkownika`, data: userOB });
    }

    /**
     * HTTP GET /rest/uzytkownicy/secured/listaUzytkownikow
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.pobierzListeUzytkownikowDto
     */
    pobierzListeUzytkownikowDto(): RestResponse<UserListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/secured/listaUzytkownikow` });
    }

    /**
     * HTTP GET /rest/uzytkownicy/secured/login
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.login
     */
    login(): RestResponse<string> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/secured/login` });
    }

    /**
     * HTTP POST /rest/uzytkownicy/secured/rejestracja
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.rejestracjaNowegoUzytkownika
     */
    rejestracjaNowegoUzytkownika(registrationDTO: RegistrationDTO): RestResponse<any> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uzytkownicy/secured/rejestracja`, data: registrationDTO });
    }
}

export type RestResponse<R> = Observable<R>;

export type OrPublic = "TAK" | "NIE";

export type UserStateEnum = "AKTYWNY" | "NIEAKTYWNY" | "ZABLOKOWANY" | "USUNIETY";

export type UserSexEnum = "KOBIETA" | "MEZCZYZNA";

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}
