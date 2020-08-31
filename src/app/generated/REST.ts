/* tslint:disable */
/* eslint-disable */

import {Observable} from "rxjs";

export class CategoryDTO {
    id: number;
    czyPubliczny: OrPublic;
    rodzajKategorii: string;
}

export class CategoryListDTO {
    listaKategorii: CategoryDTO[];
}

export class CategoryDTOrequest {
    id: number;
    czyPubliczny: OrPublic;
    rodzajKategorii: string;
}

export class CategoryDTOresponse {
    id: number;
}

export class UserDTO {
    imie: string;
    nazwisko: string;
    username: string;
    password: string;
    stan: UserStateEnum;
    email: string;
    telefon: string;
    plec: UserSexEnum;
}

export class UserListDTO {
    listaUzytkownikow: UserDTO[];
}

export class RegistrationDTO {
    imie: string;
    nazwisko: string;
    username: string;
    password: string;
    stan: UserStateEnum;
    email: string;
    telefon: string;
    plec: UserSexEnum;
}

export class UserOB implements UserDetails {
    password: string;
    enabled: boolean;
    username: string;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    authorities: GrantedAuthority[];
    id: number;
    imie: string;
    nazwisko: string;
    email: string;
    telefon: string;
    plec: UserSexEnum;
    stan: UserStateEnum;
}

export class HttpEntity<T> {
    headers: { [index: string]: any };
    body: T;
}

export class ResponseEntity<T> extends HttpEntity<T> {
    statusCode: HttpStatus;
    statusCodeValue: number;
}

export interface GrantedAuthority extends Serializable {
    authority: string;
}

export interface UserDetails extends Serializable {
    password: string;
    enabled: boolean;
    username: string;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    authorities: GrantedAuthority[];
}

export interface Serializable {
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
     * HTTP POST /rest/kategorie/secured/dodaj-kategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.secured.CategorySecuredRestApi.dodajKategorie
     */
    dodajKategorie(categoryDTO: CategoryDTO): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/kategorie/secured/dodaj-kategorie`, data: categoryDTO });
    }

    /**
     * HTTP POST /rest/kategorie/secured/modyfikuj-kategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.secured.CategorySecuredRestApi.modyfikujKategorie
     */
    modyfikujKategorie(request: CategoryDTOrequest): RestResponse<CategoryDTOresponse> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/kategorie/secured/modyfikuj-kategorie`, data: request });
    }

    /**
     * HTTP DELETE /rest/kategorie/secured/usun-kategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.secured.CategorySecuredRestApi.usunKategorie
     */
    usunKategorie(id: number): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`rest/kategorie/secured/usun-kategorie`, data: id });
    }

    /**
     * HTTP POST /rest/uzytkownicy/secured/dodaj-uzytkownika
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.utworzUzytkownika
     */
    utworzUzytkownika(userOB: UserOB): RestResponse<any> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uzytkownicy/secured/dodaj-uzytkownika`, data: userOB });
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
     * HTTP POST /rest/uzytkownicy/secured/modyfikuj-uzytkownika
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.modyfikujUzytkownika
     */
    modyfikujUzytkownika(): RestResponse<UserDTO> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uzytkownicy/secured/modyfikuj-uzytkownika` });
    }

    /**
     * HTTP POST /rest/uzytkownicy/secured/rejestracja
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.rejestracjaNowegoUzytkownika
     */
    rejestracjaNowegoUzytkownika(registrationDTO: RegistrationDTO): RestResponse<any> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uzytkownicy/secured/rejestracja`, data: registrationDTO });
    }

    /**
     * HTTP DELETE /rest/uzytkownicy/secured/usun-uzytkownika
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.usunUzytkownika
     */
    usunUzytkownika(): RestResponse<UserDTO> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`rest/uzytkownicy/secured/usun-uzytkownika` });
    }
}

export type RestResponse<R> = Observable<R>;

export type OrPublic = "TAK" | "NIE";

export type HttpStatus = "CONTINUE" | "SWITCHING_PROTOCOLS" | "PROCESSING" | "CHECKPOINT" | "OK" | "CREATED" | "ACCEPTED" | "NON_AUTHORITATIVE_INFORMATION" | "NO_CONTENT" | "RESET_CONTENT" | "PARTIAL_CONTENT" | "MULTI_STATUS" | "ALREADY_REPORTED" | "IM_USED" | "MULTIPLE_CHOICES" | "MOVED_PERMANENTLY" | "FOUND" | "MOVED_TEMPORARILY" | "SEE_OTHER" | "NOT_MODIFIED" | "USE_PROXY" | "TEMPORARY_REDIRECT" | "PERMANENT_REDIRECT" | "BAD_REQUEST" | "UNAUTHORIZED" | "PAYMENT_REQUIRED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_ALLOWED" | "NOT_ACCEPTABLE" | "PROXY_AUTHENTICATION_REQUIRED" | "REQUEST_TIMEOUT" | "CONFLICT" | "GONE" | "LENGTH_REQUIRED" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "REQUEST_ENTITY_TOO_LARGE" | "URI_TOO_LONG" | "REQUEST_URI_TOO_LONG" | "UNSUPPORTED_MEDIA_TYPE" | "REQUESTED_RANGE_NOT_SATISFIABLE" | "EXPECTATION_FAILED" | "I_AM_A_TEAPOT" | "INSUFFICIENT_SPACE_ON_RESOURCE" | "METHOD_FAILURE" | "DESTINATION_LOCKED" | "UNPROCESSABLE_ENTITY" | "LOCKED" | "FAILED_DEPENDENCY" | "TOO_EARLY" | "UPGRADE_REQUIRED" | "PRECONDITION_REQUIRED" | "TOO_MANY_REQUESTS" | "REQUEST_HEADER_FIELDS_TOO_LARGE" | "UNAVAILABLE_FOR_LEGAL_REASONS" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "BAD_GATEWAY" | "SERVICE_UNAVAILABLE" | "GATEWAY_TIMEOUT" | "HTTP_VERSION_NOT_SUPPORTED" | "VARIANT_ALSO_NEGOTIATES" | "INSUFFICIENT_STORAGE" | "LOOP_DETECTED" | "BANDWIDTH_LIMIT_EXCEEDED" | "NOT_EXTENDED" | "NETWORK_AUTHENTICATION_REQUIRED";

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
