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

export class GetReputation {
    id: number;
}

export class Reputation {
    id: number;
    user: string;
    description: string;
    like: number;
    notLike: number;
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

export class RegulationDTO {
    id: number;
    nazwa: string;
    tresc: string;
    czyPubliczny: boolean;
    nazwaKategorii: string;
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

export interface HttpServletRequest extends ServletRequest {
    session: HttpSession;
    userPrincipal: Principal;
    requestedSessionIdValid: boolean;
    httpServletMapping: HttpServletMapping;
    requestedSessionIdFromURL: boolean;
    requestedSessionIdFromUrl: boolean;
    trailerFieldsReady: boolean;
    requestedSessionIdFromCookie: boolean;
    requestedSessionId: string;
    parts: Part[];
    headerNames: Enumeration<string>;
    trailerFields: { [index: string]: string };
    cookies: Cookie[];
    contextPath: string;
    remoteUser: string;
    authType: string;
    requestURI: string;
    requestURL: StringBuffer;
    queryString: string;
    servletPath: string;
    pathInfo: string;
    pathTranslated: string;
    method: string;
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
    dataCzynnosci: Calendar;
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

export interface HttpSession {
    attributeNames: Enumeration<string>;
    maxInactiveInterval: number;
    lastAccessedTime: number;
    servletContext: ServletContext;
    new: boolean;
    valueNames: string[];
    sessionContext: HttpSessionContext;
    id: string;
    creationTime: number;
}

export interface Principal {
    name: string;
}

export interface HttpServletMapping {
    pattern: string;
    matchValue: string;
    servletName: string;
    mappingMatch: MappingMatch;
}

export interface Part {
    submittedFileName: string;
    headerNames: string[];
    name: string;
    size: number;
    inputStream: any;
    contentType: string;
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

export class AbstractStringBuilder implements Appendable, CharSequence {
}

export class StringBuffer extends AbstractStringBuilder implements Serializable, Comparable<StringBuffer>, CharSequence {
}

export interface ServletContext {
    attributeNames: Enumeration<string>;
    jspConfigDescriptor: JspConfigDescriptor;
    virtualServerName: string;
    responseCharacterEncoding: string;
    requestCharacterEncoding: string;
    servletRegistrations: { [index: string]: ServletRegistration };
    defaultSessionTrackingModes: SessionTrackingMode[];
    effectiveSessionTrackingModes: SessionTrackingMode[];
    effectiveMajorVersion: number;
    initParameterNames: Enumeration<string>;
    servletContextName: string;
    sessionCookieConfig: SessionCookieConfig;
    effectiveMinorVersion: number;
    filterRegistrations: { [index: string]: FilterRegistration };
    contextPath: string;
    servletNames: Enumeration<string>;
    sessionTimeout: number;
    servlets: Enumeration<Servlet>;
    serverInfo: string;
    classLoader: ClassLoader;
    majorVersion: number;
    minorVersion: number;
}

export class Locale implements Cloneable, Serializable {
}

export interface AsyncContext {
    request: ServletRequest;
    timeout: number;
    response: ServletResponse;
}

export interface ServletRequest {
    attributeNames: Enumeration<string>;
    parameterMap: { [index: string]: string[] };
    parameterNames: Enumeration<string>;
    reader: any;
    characterEncoding: string;
    secure: boolean;
    localPort: number;
    serverName: string;
    servletContext: ServletContext;
    remotePort: number;
    asyncStarted: boolean;
    asyncSupported: boolean;
    dispatcherType: DispatcherType;
    remoteAddr: string;
    locales: Enumeration<Locale>;
    serverPort: number;
    asyncContext: AsyncContext;
    remoteHost: string;
    localAddr: string;
    protocol: string;
    scheme: string;
    inputStream: any;
    contentLength: number;
    contentLengthLong: number;
    contentType: string;
    locale: Locale;
    localName: string;
}

export class Calendar implements Serializable, Cloneable, Comparable<Calendar> {
}

export interface HttpSessionContext {
    ids: Enumeration<string>;
}

export interface Cloneable {
}

export interface CharSequence {
}

export interface JspConfigDescriptor {
    jspPropertyGroups: JspPropertyGroupDescriptor[];
    taglibs: TaglibDescriptor[];
}

export interface ServletRegistration extends Registration {
    runAsRole: string;
    mappings: string[];
}

export interface SessionCookieConfig {
    path: string;
    domain: string;
    secure: boolean;
    maxAge: number;
    httpOnly: boolean;
    name: string;
    comment: string;
}

export interface FilterRegistration extends Registration {
    servletNameMappings: string[];
    urlPatternMappings: string[];
}

export interface Servlet {
    servletConfig: ServletConfig;
    servletInfo: string;
}

export class ClassLoader {
    parent: ClassLoader;
    name: string;
    unnamedModule: Module;
    registeredAsParallelCapable: boolean;
    definedPackages: Package[];
}

export interface ServletResponse {
    writer: PrintWriter;
    characterEncoding: string;
    bufferSize: number;
    committed: boolean;
    contentType: string;
    outputStream: ServletOutputStream;
    locale: Locale;
}

export interface Appendable {
}

export interface Comparable<T> {
}

export interface JspPropertyGroupDescriptor {
    deferredSyntaxAllowedAsLiteral: string;
    errorOnUndeclaredNamespace: string;
    scriptingInvalid: string;
    trimDirectiveWhitespaces: string;
    defaultContentType: string;
    urlPatterns: string[];
    includePreludes: string[];
    includeCodas: string[];
    elIgnored: string;
    isXml: string;
    pageEncoding: string;
    buffer: string;
}

export interface TaglibDescriptor {
    taglibURI: string;
    taglibLocation: string;
}

export interface Registration {
    initParameters: { [index: string]: string };
    name: string;
    className: string;
}

export interface ServletConfig {
    initParameterNames: Enumeration<string>;
    servletContext: ServletContext;
    servletName: string;
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

export class Writer implements Appendable, Closeable, Flushable {
}

export class PrintWriter extends Writer {
}

export class OutputStream implements Closeable, Flushable {
}

export class ServletOutputStream extends OutputStream {
    ready: boolean;
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
     * HTTP POST /rest/pomocOnline/pub/opinie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.about.onlineHelp.pub.IOnlineHelpPublicRestApi.getReputationById
     */
    getReputationById(id: GetReputation): RestResponse<Reputation> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/pomocOnline/pub/opinie`, data: id });
    }

    /**
     * HTTP GET /rest/pomocOnline/pub/opinieLista
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.about.onlineHelp.pub.IOnlineHelpPublicRestApi.getAllReputation
     */
    getAllReputation(): RestResponse<Reputation[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/pomocOnline/pub/opinieLista` });
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
     * HTTP PUT /rest/rozporzadzenia/secured/modyfikuj-rozporzadzenie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.regulations.restApi.secured.RegulationSecuredRestApi.modifyRegulation
     */
    modifyRegulation(id: number): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`rest/rozporzadzenia/secured/modyfikuj-rozporzadzenie`, data: id });
    }

    /**
     * HTTP GET /rest/rozporzadzenia/secured/szczegoly-rozporzadzenia
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.regulations.restApi.secured.RegulationSecuredRestApi.detailsRegulation
     */
    detailsRegulation(id: number): RestResponse<RegulationDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/rozporzadzenia/secured/szczegoly-rozporzadzenia`, data: id });
    }

    /**
     * HTTP DELETE /rest/rozporzadzenia/secured/usun-rozporzadzenie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.regulations.restApi.secured.RegulationSecuredRestApi.deleteRegulation
     */
    deleteRegulation(id: number): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`rest/rozporzadzenia/secured/usun-rozporzadzenie`, data: id });
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
    modifyResolution(id: number): RestResponse<ResponseEntity<HttpStatus>> {
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
