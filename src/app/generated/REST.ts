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

export class UserDTO {
    imie: string;
    nazwisko: string;
    login: string;
    typ_konta: UserAccountType;
    email: string;
    czy_zaakceptowano_regulamin: boolean;
    telefon: string;
    plec: UserSexEnum;
    dataRejestracji: Date;
}

export interface HttpClient {

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; }): RestResponse<R>;
}

export class TSAllRestApiClient {

    constructor(protected httpClient: HttpClient) {
    }

    /**
     * HTTP GET /kategorie/pub/1
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.pub.CategoryPublicRestApi.getStr
     */
    getStr(): RestResponse<string> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`kategorie/pub/1` });
    }

    /**
     * HTTP GET /kategorie/pub/wszystkieKategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.pub.CategoryPublicRestApi.pobierzListCategoryDto
     */
    pobierzListCategoryDto(): RestResponse<CategoryListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`kategorie/pub/wszystkieKategorie` });
    }

    /**
     * HTTP GET /uzytkownicy/secured/listaUzytkownikow
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.pobierzListeUzytkownikowDto
     */
    pobierzListeUzytkownikowDto(): RestResponse<UserListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`uzytkownicy/secured/listaUzytkownikow` });
    }
}

export type RestResponse<R> = Observable<R>;

export type OrPublic = "TAK" | "NIE";

export type UserAccountType = "ADMINISTRATOR" | "UZYTKOWNIK";

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
