/* tslint:disable */
/* eslint-disable */

import {Observable} from "rxjs";

export class CategoryDTO {
    id: number;
    czyPubliczny: boolean;
    rodzajKategorii: string;
}

export class CategoryListDTO {
    listaKategorii: CategoryDTO[];
}

export class UserListDTO {
    listaUzytkownikow: UserDTO[];
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
    role: RolesName[];
}

export class EventLogListDTO {
    listaLogow: EventLogDTO[];
}

export class UserPasswordDTO {
    token: string;
    password: string;
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

export class CategoryDTOrequest {
    id: number;
    czyPubliczny: boolean;
    rodzajKategorii: string;
}

export class ResolutionListDTO {
    listaUchwal: ResolutionDTO[];
}

export class ResolutionListOfCategoryDTO {
    nazwaKategorii: string;
    listaUchwal: ResolutionDTO[];
}

export class CreateResotutionDTO {
    id: number;
    opis: string;
    tresc: string;
    czyPubliczny: boolean;
    kategoria: number;
}

export class ResolutionDTO {
    id: number;
    opis: string;
    tresc: string;
    czyPubliczny: boolean;
    nazwaKategorii: string;
}

export class ResetPasswordDTO {
    username: string;
    appUrl: string;
}

export class AddUserDTO {
    imie: string;
    nazwisko: string;
    username: string;
    stan: UserStateEnum;
    email: string;
    telefon: string;
    plec: UserSexEnum;
    rola: RolesName;
}

export class LocationDTO {
    id: number;
    appUrl: string;
}

export class EventLogDTO {
    id: number;
    czynnosc: string;
    data_czynnosci: Calendar;
    uzytkownik: string;
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

export class Calendar implements Serializable, Cloneable, Comparable<Calendar> {
}

export interface Cloneable {
}

export interface Comparable<T> {
}

export interface HttpClient {

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; }): RestResponse<R>;
}

export class TSAllRestApiClient {

    constructor(protected httpClient: HttpClient) {
    }

    /**
     * HTTP GET /rest/administracja/secured/dziennikZdarzen
     * Java method: pl.kancelaria.AHG.shared.restapi.administration.restapi.secured.IAdministrationSecuredRestApi.pobierzDziennikZdarzenDto
     */
    pobierzDziennikZdarzenDto(): RestResponse<EventLogListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/administracja/secured/dziennikZdarzen` });
    }

    /**
     * HTTP POST /rest/authenticate
     * Java method: pl.kancelaria.AHG.shared.restapi.auth.restApi.pub.IAuthPublicRestApi.createAuthenticationToken
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
     * HTTP GET /rest/kategorie/pub/wyszukajKategoiePoNazwa
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.pub.CategoryPublicRestApi.wyszukajKategoriePoNazwa
     */
    wyszukajKategoriePoNazwa(queryParams?: { rodzajKategorii?: string; }): RestResponse<string[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorie/pub/wyszukajKategoiePoNazwa`, queryParams: queryParams });
    }

    /**
     * HTTP GET /rest/kategorie/pub/wyszukajKategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.pub.CategoryPublicRestApi.wyszukajKategorie
     */
    wyszukajKategorie(queryParams?: { term?: string; }): RestResponse<CategoryListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorie/pub/wyszukajKategorie`, queryParams: queryParams });
    }

    /**
     * HTTP GET /rest/kategorie/secured
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.secured.CategorySecuredRestApi.listaKategoriiPoStatusie
     */
    listaKategoriiPoStatusie(status: boolean): RestResponse<CategoryListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorie/secured`, data: status });
    }

    /**
     * HTTP POST /rest/kategorie/secured/dodaj-kategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.secured.CategorySecuredRestApi.dodajKategorie
     */
    dodajKategorie(categoryDTO: CategoryDTO): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/kategorie/secured/dodaj-kategorie`, data: categoryDTO });
    }

    /**
     * HTTP PUT /rest/kategorie/secured/modyfikuj-kategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.secured.CategorySecuredRestApi.modyfikujKategorie
     */
    modyfikujKategorie(id: number): RestResponse<CategoryDTOrequest> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`rest/kategorie/secured/modyfikuj-kategorie`, data: id });
    }

    /**
     * HTTP GET /rest/kategorie/secured/szczegoly-kategorii
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.secured.CategorySecuredRestApi.szczegolyKategorii
     */
    szczegolyKategorii(id: number): RestResponse<CategoryDTOrequest> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorie/secured/szczegoly-kategorii`, data: id });
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
     * Java method: pl.kancelaria.AHG.shared.restapi.auth.restApi.pub.IAuthPublicRestApi.saveUser
     */
    saveUser(user: RegistrationDTO): RestResponse<ResponseEntity<any>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/register`, data: user });
    }

    /**
     * HTTP POST /rest/reset-hasla
     * Java method: pl.kancelaria.AHG.shared.restapi.auth.restApi.pub.IAuthPublicRestApi.resetHasla
     */
    resetHasla(dto: UserPasswordDTO): RestResponse<boolean> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/reset-hasla`, data: dto });
    }

    /**
     * HTTP GET /rest/uchwaly/pub
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.resolutions.restapi.pub.ResolutionPublicRestApi.pobierzListeUchwalPoKategorii
     */
    pobierzListeUchwalPoKategorii(id: number): RestResponse<ResolutionListOfCategoryDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uchwaly/pub`, data: id });
    }

    /**
     * HTTP GET /rest/uchwaly/pub/listaUchwal
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.resolutions.restapi.pub.ResolutionPublicRestApi.pobierzListeUchwalDto
     */
    pobierzListeUchwalDto(): RestResponse<ResolutionListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uchwaly/pub/listaUchwal` });
    }

    /**
     * HTTP POST /rest/uchwaly/secured/dodaj-uchwale
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.resolutions.restapi.secured.ResolutionSecuredRestApi.dodajUchale
     */
    dodajUchale(resolutionDTO: CreateResotutionDTO): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uchwaly/secured/dodaj-uchwale`, data: resolutionDTO });
    }

    /**
     * HTTP PUT /rest/uchwaly/secured/modyfikuj-uchwale
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.resolutions.restapi.secured.ResolutionSecuredRestApi.modyfikujUchwale
     */
    modyfikujUchwale(id: number): RestResponse<ResolutionDTO> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`rest/uchwaly/secured/modyfikuj-uchwale`, data: id });
    }

    /**
     * HTTP GET /rest/uchwaly/secured/szczegoly-uchwaly
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.resolutions.restapi.secured.ResolutionSecuredRestApi.szczegolyUchwaly
     */
    szczegolyUchwaly(id: number): RestResponse<ResolutionDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uchwaly/secured/szczegoly-uchwaly`, data: id });
    }

    /**
     * HTTP DELETE /rest/uchwaly/secured/usun-uchwale
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.resolutions.restapi.secured.ResolutionSecuredRestApi.usunUchwale
     */
    usunUchwale(id: number): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`rest/uchwaly/secured/usun-uchwale`, data: id });
    }

    /**
     * HTTP POST /rest/ustaw-haslo
     * Java method: pl.kancelaria.AHG.shared.restapi.auth.restApi.pub.IAuthPublicRestApi.aktywacjaHasla
     */
    aktywacjaHasla(dto: UserPasswordDTO): RestResponse<boolean> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/ustaw-haslo`, data: dto });
    }

    /**
     * HTTP POST /rest/uzytkownicy/pub/reset-hasla
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.pub.UserPublicRestApi.ResetHasla
     */
    ResetHasla(dto: ResetPasswordDTO): RestResponse<boolean> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uzytkownicy/pub/reset-hasla`, data: dto });
    }

    /**
     * HTTP GET /rest/uzytkownicy/pub/weryfikuj-token
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.pub.UserPublicRestApi.weryfikujToken
     */
    weryfikujToken(token: string): RestResponse<boolean> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/pub/weryfikuj-token`, data: token });
    }

    /**
     * HTTP GET /rest/uzytkownicy/secured
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.pobierzListeUzytkownikowPoStan
     */
    pobierzListeUzytkownikowPoStan(queryParams?: { stan?: string; }): RestResponse<UserListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/secured`, queryParams: queryParams });
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
    pobierzListeUzytkownikowDto(queryParams?: { term?: string; }): RestResponse<UserListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/secured/listaUzytkownikow`, queryParams: queryParams });
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
     * HTTP POST /rest/uzytkownicy/secured/wyslij-email-aktywacyjny
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.wyslijMailAktywacyjny
     */
    wyslijMailAktywacyjny(locationDTO: LocationDTO): RestResponse<boolean> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uzytkownicy/secured/wyslij-email-aktywacyjny`, data: locationDTO });
    }
}

export type RestResponse<R> = Observable<R>;

export type UserStateEnum = "AKTYWNY" | "NIEAKTYWNY" | "ZABLOKOWANY" | "USUNIETY";

export type UserSexEnum = "KOBIETA" | "MEZCZYZNA";

export type RolesName = "USER" | "ADMIN";

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
