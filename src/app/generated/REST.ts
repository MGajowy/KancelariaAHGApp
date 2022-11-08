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

export class JwtRequest implements Serializable {
    username: string;
    password: string;
}

export class UserPasswordDTO {
    token: string;
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

export class OnlineHelpRequestDto {
    name: string;
    email: string;
    message: string;
    phoneNumber: string;
}

export class CategoryDTOrequest {
    id: number;
    czyPubliczny: boolean;
    rodzajKategorii: string;
}

export class RegulationListDTO {
    listaRozporzadzen: RegulationDTO[];
}

export class CreateRegulationDTO {
    id: number;
    nazwa: string;
    tresc: string;
    czyPubliczny: boolean;
    kategoria: number;
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

export class ResolutionRequestDTO {
    opis: string;
    tresc: string;
    czyPubliczny: boolean;
    idKategorii: number;
}

export interface HttpServletRequest extends ServletRequest {
    method: string;
    contextPath: string;
    pathTranslated: string;
    pathInfo: string;
    session: HttpSession;
    userPrincipal: Principal;
    authType: string;
    servletPath: string;
    requestURL: StringBuffer;
    requestURI: string;
    headerNames: Enumeration<string>;
    trailerFields: { [index: string]: string };
    remoteUser: string;
    cookies: Cookie[];
    parts: Part[];
    queryString: string;
    requestedSessionId: string;
    requestedSessionIdFromURL: boolean;
    httpServletMapping: HttpServletMapping;
    requestedSessionIdFromCookie: boolean;
    requestedSessionIdFromUrl: boolean;
    requestedSessionIdValid: boolean;
    trailerFieldsReady: boolean;
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

export class RegulationDTO {
    id: number;
    nazwa: string;
    tresc: string;
    czyPubliczny: boolean;
    nazwaKategorii: string;
}

export interface HttpSession {
    id: string;
    creationTime: number;
    attributeNames: Enumeration<string>;
    servletContext: ServletContext;
    sessionContext: HttpSessionContext;
    new: boolean;
    valueNames: string[];
    maxInactiveInterval: number;
    lastAccessedTime: number;
}

export interface Principal {
    name: string;
}

export class AbstractStringBuilder implements Appendable, CharSequence {
}

export class StringBuffer extends AbstractStringBuilder implements Serializable, Comparable<StringBuffer>, CharSequence {
}

export interface Enumeration<E> {
}

export class Cookie implements Cloneable, Serializable {
    name: string;
    value: string;
    version: number;
    comment: string;
    domain: string;
    maxAge: number;
    path: string;
    secure: boolean;
    httpOnly: boolean;
}

export interface Part {
    name: string;
    size: number;
    inputStream: any;
    contentType: string;
    headerNames: string[];
    submittedFileName: string;
}

export interface HttpServletMapping {
    pattern: string;
    matchValue: string;
    mappingMatch: MappingMatch;
    servletName: string;
}

export class Locale implements Cloneable, Serializable {
}

export interface ServletContext {
    classLoader: ClassLoader;
    majorVersion: number;
    minorVersion: number;
    contextPath: string;
    attributeNames: Enumeration<string>;
    serverInfo: string;
    servletNames: Enumeration<string>;
    servlets: Enumeration<Servlet>;
    sessionTimeout: number;
    virtualServerName: string;
    responseCharacterEncoding: string;
    servletRegistrations: { [index: string]: ServletRegistration };
    effectiveMajorVersion: number;
    defaultSessionTrackingModes: SessionTrackingMode[];
    servletContextName: string;
    filterRegistrations: { [index: string]: FilterRegistration };
    effectiveMinorVersion: number;
    requestCharacterEncoding: string;
    effectiveSessionTrackingModes: SessionTrackingMode[];
    initParameterNames: Enumeration<string>;
    sessionCookieConfig: SessionCookieConfig;
    jspConfigDescriptor: JspConfigDescriptor;
}

export interface AsyncContext {
    request: ServletRequest;
    timeout: number;
    response: ServletResponse;
}

export interface ServletRequest {
    protocol: string;
    scheme: string;
    inputStream: any;
    contentLength: number;
    contentLengthLong: number;
    contentType: string;
    locale: Locale;
    attributeNames: Enumeration<string>;
    localName: string;
    reader: any;
    parameterMap: { [index: string]: string[] };
    remoteHost: string;
    remoteAddr: string;
    asyncStarted: boolean;
    secure: boolean;
    serverPort: number;
    localPort: number;
    serverName: string;
    locales: Enumeration<Locale>;
    remotePort: number;
    localAddr: string;
    asyncSupported: boolean;
    dispatcherType: DispatcherType;
    servletContext: ServletContext;
    asyncContext: AsyncContext;
    characterEncoding: string;
    parameterNames: Enumeration<string>;
}

export class Calendar implements Serializable, Cloneable, Comparable<Calendar> {
}

export interface HttpSessionContext {
    ids: Enumeration<string>;
}

export interface CharSequence {
}

export interface Cloneable {
}

export class ClassLoader {
    parent: ClassLoader;
    name: string;
    unnamedModule: Module;
    registeredAsParallelCapable: boolean;
    definedPackages: Package[];
}

export interface Servlet {
    servletConfig: ServletConfig;
    servletInfo: string;
}

export interface ServletRegistration extends Registration {
    runAsRole: string;
    mappings: string[];
}

export interface FilterRegistration extends Registration {
    servletNameMappings: string[];
    urlPatternMappings: string[];
}

export interface SessionCookieConfig {
    name: string;
    path: string;
    comment: string;
    domain: string;
    secure: boolean;
    httpOnly: boolean;
    maxAge: number;
}

export interface JspConfigDescriptor {
    taglibs: TaglibDescriptor[];
    jspPropertyGroups: JspPropertyGroupDescriptor[];
}

export interface ServletResponse {
    locale: Locale;
    contentType: string;
    outputStream: ServletOutputStream;
    writer: PrintWriter;
    bufferSize: number;
    committed: boolean;
    characterEncoding: string;
}

export interface Appendable {
}

export interface Comparable<T> {
}

export class Module implements AnnotatedElement {
    annotations: Annotation[];
    declaredAnnotations: Annotation[];
    layer: ModuleLayer;
    name: string;
    descriptor: ModuleDescriptor;
    classLoader: ClassLoader;
    named: boolean;
    packages: string[];
}

export class NamedPackage {
}

export class Package extends NamedPackage implements AnnotatedElement {
    annotations: Annotation[];
    declaredAnnotations: Annotation[];
    name: string;
    sealed: boolean;
    specificationTitle: string;
    specificationVersion: string;
    specificationVendor: string;
    implementationTitle: string;
    implementationVersion: string;
    implementationVendor: string;
}

export interface ServletConfig {
    servletContext: ServletContext;
    servletName: string;
    initParameterNames: Enumeration<string>;
}

export interface Registration {
    name: string;
    className: string;
    initParameters: { [index: string]: string };
}

export interface TaglibDescriptor {
    taglibURI: string;
    taglibLocation: string;
}

export interface JspPropertyGroupDescriptor {
    buffer: string;
    urlPatterns: string[];
    elIgnored: string;
    pageEncoding: string;
    isXml: string;
    includePreludes: string[];
    includeCodas: string[];
    scriptingInvalid: string;
    deferredSyntaxAllowedAsLiteral: string;
    trimDirectiveWhitespaces: string;
    errorOnUndeclaredNamespace: string;
    defaultContentType: string;
}

export class OutputStream implements Closeable, Flushable {
}

export class ServletOutputStream extends OutputStream {
    ready: boolean;
}

export class Writer implements Appendable, Closeable, Flushable {
}

export class PrintWriter extends Writer {
}

export class ModuleLayer {
}

export class ModuleDescriptor implements Comparable<ModuleDescriptor> {
    open: boolean;
    automatic: boolean;
}

export interface Annotation {
}

export interface AnnotatedElement {
    annotations: Annotation[];
    declaredAnnotations: Annotation[];
}

export interface Closeable extends AutoCloseable {
}

export interface Flushable {
}

export interface AutoCloseable {
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
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.pub.CategoryPublicRestApi.getCategoryList
     */
    getCategoryList$GET$rest_kategorie_pub_wszystkieKategorie(): RestResponse<CategoryListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorie/pub/wszystkieKategorie` });
    }

    /**
     * HTTP GET /rest/kategorie/pub/wyszukajKategoiePoNazwa
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.pub.CategoryPublicRestApi.getCategoryListByName2
     */
    getCategoryListByName2(queryParams?: { rodzajKategorii?: string; }): RestResponse<string[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorie/pub/wyszukajKategoiePoNazwa`, queryParams: queryParams });
    }

    /**
     * HTTP GET /rest/kategorie/pub/wyszukajKategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.pub.CategoryPublicRestApi.searchCategories
     */
    searchCategories(queryParams?: { term?: string; }): RestResponse<CategoryListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorie/pub/wyszukajKategorie`, queryParams: queryParams });
    }

    /**
     * HTTP GET /rest/kategorie/secured
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.secured.CategorySecuredRestApi.searchCategoriesByStatus
     */
    searchCategoriesByStatus(status: boolean): RestResponse<CategoryListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorie/secured`, data: status });
    }

    /**
     * HTTP POST /rest/kategorie/secured/dodaj-kategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.secured.CategorySecuredRestApi.addNewCategories
     */
    addNewCategories$POST$rest_kategorie_secured_dodajkategorie(categoryDTO: CategoryDTO): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/kategorie/secured/dodaj-kategorie`, data: categoryDTO });
    }

    /**
     * HTTP PUT /rest/kategorie/secured/modyfikuj-kategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.secured.CategorySecuredRestApi.modifyCategories
     */
    modifyCategories$PUT$rest_kategorie_secured_modyfikujkategorie(id: number): RestResponse<CategoryDTOrequest> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`rest/kategorie/secured/modyfikuj-kategorie`, data: id });
    }

    /**
     * HTTP GET /rest/kategorie/secured/szczegoly-kategorii
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.secured.CategorySecuredRestApi.getCategoriesById
     */
    getCategoriesById$GET$rest_kategorie_secured_szczegolykategorii(id: number): RestResponse<CategoryDTOrequest> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorie/secured/szczegoly-kategorii`, data: id });
    }

    /**
     * HTTP DELETE /rest/kategorie/secured/usun-kategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.secured.CategorySecuredRestApi.deleteCategories
     */
    deleteCategories$DELETE$rest_kategorie_secured_usunkategorie(id: number): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`rest/kategorie/secured/usun-kategorie`, data: id });
    }

    /**
     * HTTP GET /rest/kategorieRozporzadzen/pub/wszystkieKategorieRozporzadzen
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categoriesRegulations.restApi.pub.CategoryRegulationPublicRestApi.getCategoryList
     */
    getCategoryList$GET$rest_kategorieRozporzadzen_pub_wszystkieKategorieRozporzadzen(): RestResponse<CategoryListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorieRozporzadzen/pub/wszystkieKategorieRozporzadzen` });
    }

    /**
     * HTTP GET /rest/kategorieRozporzadzen/pub/wyszukajKategorieRozporzadzeniaPoNazwa
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categoriesRegulations.restApi.pub.CategoryRegulationPublicRestApi.getCategoryListByName
     */
    getCategoryListByName(queryParams?: { term?: string; }): RestResponse<CategoryListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorieRozporzadzen/pub/wyszukajKategorieRozporzadzeniaPoNazwa`, queryParams: queryParams });
    }

    /**
     * HTTP POST /rest/kategorieRozporzadzen/secured/dodaj-kategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categoriesRegulations.restApi.secured.CategoryRegulationSecuredRestApi.addNewCategories
     */
    addNewCategories$POST$rest_kategorieRozporzadzen_secured_dodajkategorie(categoryDTO: CategoryDTO): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/kategorieRozporzadzen/secured/dodaj-kategorie`, data: categoryDTO });
    }

    /**
     * HTTP PUT /rest/kategorieRozporzadzen/secured/modyfikuj-kategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categoriesRegulations.restApi.secured.CategoryRegulationSecuredRestApi.modifyCategories
     */
    modifyCategories$PUT$rest_kategorieRozporzadzen_secured_modyfikujkategorie(id: number): RestResponse<CategoryDTOrequest> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`rest/kategorieRozporzadzen/secured/modyfikuj-kategorie`, data: id });
    }

    /**
     * HTTP GET /rest/kategorieRozporzadzen/secured/szczegoly-kategorii
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categoriesRegulations.restApi.secured.CategoryRegulationSecuredRestApi.getCategoriesById
     */
    getCategoriesById$GET$rest_kategorieRozporzadzen_secured_szczegolykategorii(id: number): RestResponse<CategoryDTOrequest> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorieRozporzadzen/secured/szczegoly-kategorii`, data: id });
    }

    /**
     * HTTP DELETE /rest/kategorieRozporzadzen/secured/usun-kategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categoriesRegulations.restApi.secured.CategoryRegulationSecuredRestApi.deleteCategories
     */
    deleteCategories$DELETE$rest_kategorieRozporzadzen_secured_usunkategorie(id: number): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`rest/kategorieRozporzadzen/secured/usun-kategorie`, data: id });
    }

    /**
     * HTTP POST /rest/pomocOnline/pub/wyslijPowiadomienie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.about.onlineHelp.pub.IOnlineHelpPublicRestApi.sendEmailNotification
     */
    sendEmailNotification(request: OnlineHelpRequestDto): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/pomocOnline/pub/wyslijPowiadomienie`, data: request });
    }

    /**
     * HTTP POST /rest/register
     * Java method: pl.kancelaria.AHG.shared.restapi.auth.restApi.pub.IAuthPublicRestApi.saveUser
     */
    saveUser(user: RegistrationDTO): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/register`, data: user });
    }

    /**
     * HTTP POST /rest/reset-hasla
     * Java method: pl.kancelaria.AHG.shared.restapi.auth.restApi.pub.IAuthPublicRestApi.resetPassword
     */
    resetPassword(dto: UserPasswordDTO): RestResponse<boolean> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/reset-hasla`, data: dto });
    }

    /**
     * HTTP GET /rest/rozporzadzenia/pub/listaRozporzadzenWgOpis
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.regulations.restApi.pub.RegulationPublicRestApi.getRegulationsListByName
     */
    getRegulationsListByName(queryParams?: { nazwa?: string; }): RestResponse<RegulationListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/rozporzadzenia/pub/listaRozporzadzenWgOpis`, queryParams: queryParams });
    }

    /**
     * HTTP POST /rest/rozporzadzenia/secured/dodaj-rozporzadzenie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.regulations.restApi.secured.RegulationSecuredRestApi.addNewRegulation
     */
    addNewRegulation(regulationDTO: CreateRegulationDTO): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/rozporzadzenia/secured/dodaj-rozporzadzenie`, data: regulationDTO });
    }

    /**
     * HTTP GET /rest/uchwaly/pub
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.resolutions.restapi.pub.ResolutionPublicRestApi.getResolutionListByCategories
     */
    getResolutionListByCategories(id: number): RestResponse<ResolutionListOfCategoryDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uchwaly/pub`, data: id });
    }

    /**
     * HTTP GET /rest/uchwaly/pub/listaUchwal
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.resolutions.restapi.pub.ResolutionPublicRestApi.getResolutionList
     */
    getResolutionList(): RestResponse<ResolutionListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uchwaly/pub/listaUchwal` });
    }

    /**
     * HTTP POST /rest/uchwaly/secured/dodaj-uchwale
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.resolutions.restapi.secured.ResolutionSecuredRestApi.addNewResolution
     */
    addNewResolution(resolutionDTO: CreateResotutionDTO): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uchwaly/secured/dodaj-uchwale`, data: resolutionDTO });
    }

    /**
     * HTTP PUT /rest/uchwaly/secured/modyfikuj-uchwale
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.resolutions.restapi.secured.ResolutionSecuredRestApi.modifyResolution
     */
    modifyResolution(id: number): RestResponse<ResolutionRequestDTO> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`rest/uchwaly/secured/modyfikuj-uchwale`, data: id });
    }

    /**
     * HTTP GET /rest/uchwaly/secured/szczegoly-uchwaly
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.resolutions.restapi.secured.ResolutionSecuredRestApi.detailsResolution
     */
    detailsResolution(id: number): RestResponse<ResolutionDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uchwaly/secured/szczegoly-uchwaly`, data: id });
    }

    /**
     * HTTP DELETE /rest/uchwaly/secured/usun-uchwale
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.resolutions.restapi.secured.ResolutionSecuredRestApi.deleteResolution
     */
    deleteResolution(id: number): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`rest/uchwaly/secured/usun-uchwale`, data: id });
    }

    /**
     * HTTP POST /rest/ustaw-haslo
     * Java method: pl.kancelaria.AHG.shared.restapi.auth.restApi.pub.IAuthPublicRestApi.verifyTokenAndSetPassword
     */
    verifyTokenAndSetPassword(dto: UserPasswordDTO): RestResponse<boolean> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/ustaw-haslo`, data: dto });
    }

    /**
     * HTTP POST /rest/uzytkownicy/pub/reset-hasla
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.pub.UserPublicRestApi.passwordReset
     */
    passwordReset(dto: ResetPasswordDTO): RestResponse<boolean> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uzytkownicy/pub/reset-hasla`, data: dto });
    }

    /**
     * HTTP GET /rest/uzytkownicy/pub/role
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.pub.UserPublicRestApi.getRoles
     */
    getRoles(request: HttpServletRequest): RestResponse<RolesName[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/pub/role`, data: request });
    }

    /**
     * HTTP GET /rest/uzytkownicy/pub/weryfikuj-token
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.pub.UserPublicRestApi.checkToken
     */
    checkToken(token: string): RestResponse<boolean> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/pub/weryfikuj-token`, data: token });
    }

    /**
     * HTTP GET /rest/uzytkownicy/secured
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.getUserListOfStatus
     */
    getUserListOfStatus(queryParams?: { stan?: string; }): RestResponse<UserListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/secured`, queryParams: queryParams });
    }

    /**
     * HTTP POST /rest/uzytkownicy/secured/dezaktywuj-uzytkownika
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.userDeactivation
     */
    userDeactivation(id: number): RestResponse<boolean> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uzytkownicy/secured/dezaktywuj-uzytkownika`, data: id });
    }

    /**
     * HTTP POST /rest/uzytkownicy/secured/dodaj-uzytkownika
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.createNewUser
     */
    createNewUser(addUserDTO: AddUserDTO): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uzytkownicy/secured/dodaj-uzytkownika`, data: addUserDTO });
    }

    /**
     * HTTP GET /rest/uzytkownicy/secured/listaUzytkownikow
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.getUserList
     */
    getUserList(queryParams?: { term?: string; }): RestResponse<UserListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/secured/listaUzytkownikow`, queryParams: queryParams });
    }

    /**
     * HTTP PUT /rest/uzytkownicy/secured/modyfikuj-uzytkownika
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.modifyUser
     */
    modifyUser(id: number): RestResponse<UserDTO> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`rest/uzytkownicy/secured/modyfikuj-uzytkownika`, data: id });
    }

    /**
     * HTTP GET /rest/uzytkownicy/secured/szczegoly-uzytkownika
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.userDetails
     */
    userDetails(id: number): RestResponse<UserDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/secured/szczegoly-uzytkownika`, data: id });
    }

    /**
     * HTTP DELETE /rest/uzytkownicy/secured/usun-uzytkownika
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.deleteUser
     */
    deleteUser(id: number): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`rest/uzytkownicy/secured/usun-uzytkownika`, data: id });
    }

    /**
     * HTTP POST /rest/uzytkownicy/secured/wyslij-email-aktywacyjny
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.userActivation
     */
    userActivation(locationDTO: LocationDTO): RestResponse<boolean> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/uzytkownicy/secured/wyslij-email-aktywacyjny`, data: locationDTO });
    }
}

export type RestResponse<R> = Observable<R>;

export type UserStateEnum = "AKTYWNY" | "NIEAKTYWNY" | "ZABLOKOWANY" | "USUNIETY";

export type UserSexEnum = "KOBIETA" | "MEZCZYZNA";

export type RolesName = "USER" | "ADMIN";

export type HttpStatus = "CONTINUE" | "SWITCHING_PROTOCOLS" | "PROCESSING" | "CHECKPOINT" | "OK" | "CREATED" | "ACCEPTED" | "NON_AUTHORITATIVE_INFORMATION" | "NO_CONTENT" | "RESET_CONTENT" | "PARTIAL_CONTENT" | "MULTI_STATUS" | "ALREADY_REPORTED" | "IM_USED" | "MULTIPLE_CHOICES" | "MOVED_PERMANENTLY" | "FOUND" | "MOVED_TEMPORARILY" | "SEE_OTHER" | "NOT_MODIFIED" | "USE_PROXY" | "TEMPORARY_REDIRECT" | "PERMANENT_REDIRECT" | "BAD_REQUEST" | "UNAUTHORIZED" | "PAYMENT_REQUIRED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_ALLOWED" | "NOT_ACCEPTABLE" | "PROXY_AUTHENTICATION_REQUIRED" | "REQUEST_TIMEOUT" | "CONFLICT" | "GONE" | "LENGTH_REQUIRED" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "REQUEST_ENTITY_TOO_LARGE" | "URI_TOO_LONG" | "REQUEST_URI_TOO_LONG" | "UNSUPPORTED_MEDIA_TYPE" | "REQUESTED_RANGE_NOT_SATISFIABLE" | "EXPECTATION_FAILED" | "I_AM_A_TEAPOT" | "INSUFFICIENT_SPACE_ON_RESOURCE" | "METHOD_FAILURE" | "DESTINATION_LOCKED" | "UNPROCESSABLE_ENTITY" | "LOCKED" | "FAILED_DEPENDENCY" | "TOO_EARLY" | "UPGRADE_REQUIRED" | "PRECONDITION_REQUIRED" | "TOO_MANY_REQUESTS" | "REQUEST_HEADER_FIELDS_TOO_LARGE" | "UNAVAILABLE_FOR_LEGAL_REASONS" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "BAD_GATEWAY" | "SERVICE_UNAVAILABLE" | "GATEWAY_TIMEOUT" | "HTTP_VERSION_NOT_SUPPORTED" | "VARIANT_ALSO_NEGOTIATES" | "INSUFFICIENT_STORAGE" | "LOOP_DETECTED" | "BANDWIDTH_LIMIT_EXCEEDED" | "NOT_EXTENDED" | "NETWORK_AUTHENTICATION_REQUIRED";

export type DispatcherType = "FORWARD" | "INCLUDE" | "REQUEST" | "ASYNC" | "ERROR";

export type MappingMatch = "CONTEXT_ROOT" | "DEFAULT" | "EXACT" | "EXTENSION" | "PATH";

export type SessionTrackingMode = "COOKIE" | "URL" | "SSL";

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}
