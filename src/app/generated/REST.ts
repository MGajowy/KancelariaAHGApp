/* tslint:disable */
/* eslint-disable */

import {Observable} from "rxjs";

export class CategoryDTO {
    id: number;
    czyPubliczny: boolean;
    rodzajKategorii: string;
}

export class JwtRequest implements Serializable {
    username: string;
    password: string;
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

export class CategoryListDTO {
    listaKategorii: CategoryDTO[];
}

export class CategoryDTOrequest {
    id: number;
    czyPubliczny: boolean;
    rodzajKategorii: string;
}

export class CategoryDTOresponse {
    id: number;
}

export class UserDTO {
    id: number;
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

export class AddUserDTO {
    imie: string;
    nazwisko: string;
    username: string;
    stan: UserStateEnum;
    email: string;
    telefon: string;
    plec: UserSexEnum;
}

export interface Serializable {
}

export class HttpEntity<T> {
    headers: { [index: string]: any };
    body: T;
}

export class ResponseEntity<T> extends HttpEntity<T> {
    statusCode: HttpStatus;
    statusCodeValue: number;
}

export interface HttpClient {

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; }): RestResponse<R>;
}

export class TSAllRestApiClient {

    constructor(protected httpClient: HttpClient) {
    }

    /**
     * HTTP POST /rest/authenticate
     * Java method: pl.kancelaria.AHG.shared.restapi.auth.restApi.pub.AuthPublicRestApi.createAuthenticationToken
     */
    createAuthenticationToken(authenticationRequest: JwtRequest): RestResponse<ResponseEntity<any>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/authenticate`, data: authenticationRequest });
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
     * HTTP POST /rest/register
     * Java method: pl.kancelaria.AHG.shared.restapi.auth.restApi.pub.AuthPublicRestApi.saveUser
     */
    saveUser(user: RegistrationDTO): RestResponse<ResponseEntity<any>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/register`, data: user });
    }

    /**
     * HTTP POST /rest/uzytkownicy/secured/dezaktywuj-uzytkownika
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.dezaktywacjaUzytkownika
     */
    dezaktywacjaUzytkownika(id: number): RestResponse<boolean> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uzytkownicy/secured/dezaktywuj-uzytkownika`, data: id });
    }

    /**
     * HTTP POST /rest/uzytkownicy/secured/dodaj-uzytkownika
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.utworzUzytkownika
     */
    utworzUzytkownika(addUserDTO: AddUserDTO): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uzytkownicy/secured/dodaj-uzytkownika`, data: addUserDTO });
    }

    /**
     * HTTP GET /rest/uzytkownicy/secured/listaUzytkownikow
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.pobierzListeUzytkownikowDto
     */
    pobierzListeUzytkownikowDto(): RestResponse<UserListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/secured/listaUzytkownikow` });
    }

    /**
     * HTTP PUT /rest/uzytkownicy/secured/modyfikuj-uzytkownika
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.modyfikujUzytkownika
     */
    modyfikujUzytkownika(id: number): RestResponse<UserDTO> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`rest/uzytkownicy/secured/modyfikuj-uzytkownika`, data: id });
    }

    /**
     * HTTP GET /rest/uzytkownicy/secured/szczegoly-uzytkownika
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.szczegolyUzytkownika
     */
    szczegolyUzytkownika(id: number): RestResponse<UserDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/secured/szczegoly-uzytkownika`, data: id });
    }

    /**
     * HTTP DELETE /rest/uzytkownicy/secured/usun-uzytkownika
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.usunUzytkownika
     */
    usunUzytkownika(id: number): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`rest/uzytkownicy/secured/usun-uzytkownika`, data: id });
    }

    /**
     * HTTP GET /rest/uzytkownicy/secured/weryfikuj-token
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.weryfikujToken
     */
    weryfikujToken(token: string): RestResponse<boolean> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/secured/weryfikuj-token`, data: token });
    }

    /**
     * HTTP GET /rest/uzytkownicy/secured/wyslij-email-aktywacyjny
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.wyslijMailAktywacyjny
     */
    wyslijMailAktywacyjny(id: number): RestResponse<boolean> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/secured/wyslij-email-aktywacyjny`, data: id });
    }
}

export type RestResponse<R> = Observable<R>;

export type UserStateEnum = "AKTYWNY" | "NIEAKTYWNY" | "ZABLOKOWANY" | "USUNIETY";

export type UserSexEnum = "KOBIETA" | "MEZCZYZNA";

export type HttpStatus = "CONTINUE" | "SWITCHING_PROTOCOLS" | "PROCESSING" | "CHECKPOINT" | "OK" | "CREATED" | "ACCEPTED" | "NON_AUTHORITATIVE_INFORMATION" | "NO_CONTENT" | "RESET_CONTENT" | "PARTIAL_CONTENT" | "MULTI_STATUS" | "ALREADY_REPORTED" | "IM_USED" | "MULTIPLE_CHOICES" | "MOVED_PERMANENTLY" | "FOUND" | "MOVED_TEMPORARILY" | "SEE_OTHER" | "NOT_MODIFIED" | "USE_PROXY" | "TEMPORARY_REDIRECT" | "PERMANENT_REDIRECT" | "BAD_REQUEST" | "UNAUTHORIZED" | "PAYMENT_REQUIRED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_ALLOWED" | "NOT_ACCEPTABLE" | "PROXY_AUTHENTICATION_REQUIRED" | "REQUEST_TIMEOUT" | "CONFLICT" | "GONE" | "LENGTH_REQUIRED" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "REQUEST_ENTITY_TOO_LARGE" | "URI_TOO_LONG" | "REQUEST_URI_TOO_LONG" | "UNSUPPORTED_MEDIA_TYPE" | "REQUESTED_RANGE_NOT_SATISFIABLE" | "EXPECTATION_FAILED" | "I_AM_A_TEAPOT" | "INSUFFICIENT_SPACE_ON_RESOURCE" | "METHOD_FAILURE" | "DESTINATION_LOCKED" | "UNPROCESSABLE_ENTITY" | "LOCKED" | "FAILED_DEPENDENCY" | "TOO_EARLY" | "UPGRADE_REQUIRED" | "PRECONDITION_REQUIRED" | "TOO_MANY_REQUESTS" | "REQUEST_HEADER_FIELDS_TOO_LARGE" | "UNAVAILABLE_FOR_LEGAL_REASONS" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "BAD_GATEWAY" | "SERVICE_UNAVAILABLE" | "GATEWAY_TIMEOUT" | "HTTP_VERSION_NOT_SUPPORTED" | "VARIANT_ALSO_NEGOTIATES" | "INSUFFICIENT_STORAGE" | "LOOP_DETECTED" | "BANDWIDTH_LIMIT_EXCEEDED" | "NOT_EXTENDED" | "NETWORK_AUTHENTICATION_REQUIRED";

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}
