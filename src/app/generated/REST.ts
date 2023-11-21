/* tslint:disable */
/* eslint-disable */

import {Observable} from "rxjs";

export class CategoryDTO {
    id: number;
    isPublic: boolean;
    categoryName: string;
}

export class CategoryListDTO {
    categoryList: CategoryDTO[];
}

export class UserListDTO {
    usersList: UserDTO[];
    totalRecord: number;
}

export class UserDTO {
    id: number;
    name: string;
    surname: string;
    username: string;
    password: string;
    activationState: UserStateEnum;
    email: string;
    phoneNumber: string;
    sex: UserSexEnum;
    roles: RolesName[];
    dateAdded: string;
}

export class OrderDTO {
    id: number;
    name: string;
    surname: string;
    sum: number;
    orInstallments: boolean;
    numberOfInstallments: number;
    email: string;
    phoneNumber: string;
    dateOfAdmission: string;
    endDate: string;
    caseType: string;
}

export class OrderFinishDTO {
    id: number;
    dateToClose: Date;
}

export class EventLogListDTO {
    logList: EventLogDTO[];
    totalRecord: number;
}

export class OrdersListDTO {
    orderDTOList: OrderDTO[];
    totalRecord: number;
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
    name: string;
    surname: string;
    username: string;
    password: string;
    activationState: UserStateEnum;
    email: string;
    phoneNumber: string;
    sex: UserSexEnum;
}

export class OnlineHelpRequestDto {
    name: string;
    email: string;
    message: string;
    phoneNumber: string;
}

export class CategoryDTOrequest {
    id: number;
    isPublic: boolean;
    categoryName: string;
}

export class DocumentListDTO {
    documentList: DocumentDTO[];
    totalRecords: number;
}

export class RegulationListDTO {
    regulationList: RegulationDTO[];
    totalRecords: number;
}

export class CreateRegulationDTO {
    id: number;
    regulationName: string;
    contents: string;
    isPublic: boolean;
    category: number;
}

export class RegulationDTO {
    id: number;
    regulationName: string;
    contents: string;
    isPublic: boolean;
    categoryName: string;
    dateAdded: string;
}

export class ResolutionListDTO {
    resolutionsList: ResolutionDTO[];
    totalRecords: number;
}

export class ResolutionListOfCategoryDTO {
    categoryName: string;
    resolutionsList: ResolutionDTO[];
}

export class CreateResotutionDTO {
    id: number;
    resolutionName: string;
    contents: string;
    isPublic: boolean;
    categoryId: number;
}

export class ResolutionDTO {
    id: number;
    resolutionName: string;
    contents: string;
    isPublic: boolean;
    categoryName: string;
    dateAdded: string;
}

export class AddReputation {
    reputationAdd: ReputationAdd;
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
    visible: boolean;
    dateAdded: string;
}

export interface HttpServletRequest extends ServletRequest {
    method: string;
    userPrincipal: Principal;
    session: HttpSession;
    cookies: Cookie[];
    trailerFields: { [index: string]: string };
    headerNames: Enumeration<string>;
    requestURI: string;
    servletPath: string;
    authType: string;
    remoteUser: string;
    requestURL: StringBuffer;
    pathInfo: string;
    contextPath: string;
    pathTranslated: string;
    queryString: string;
    parts: Part[];
    requestedSessionIdValid: boolean;
    requestedSessionIdFromUrl: boolean;
    trailerFieldsReady: boolean;
    httpServletMapping: HttpServletMapping;
    requestedSessionIdFromURL: boolean;
    requestedSessionId: string;
    requestedSessionIdFromCookie: boolean;
}

export class ResetPasswordDTO {
    username: string;
    appUrl: string;
}

export class AddUserDTO {
    name: string;
    surname: string;
    username: string;
    activationState: UserStateEnum;
    email: string;
    phoneNumber: string;
    sex: UserSexEnum;
    rolesName: RolesName;
}

export class UserListDocumentDTO {
    userDocument: UserDocumentDTO[];
}

export class LocationDTO {
    id: number;
    appUrl: string;
}

export class HttpEntity<T> {
    headers: { [index: string]: any };
    body: T;
}

export class ResponseEntity<T> extends HttpEntity<T> {
    statusCode: HttpStatus;
    statusCodeValue: number;
}

export class EventLogDTO {
    id: number;
    action: string;
    dateAction: string;
    userName: string;
}

export interface Serializable {
}

export class AbstractResource implements Resource {
    inputStream: any;
    open: boolean;
    file: any;
    url: URL;
    readable: boolean;
    description: string;
    uri: URI;
    filename: string;
}

export class ByteArrayResource extends AbstractResource {
    byteArray: any;
}

export class DocumentDTO {
    id: number;
    docName: string;
    docType: string;
    data: any;
    createDate: Date;
    deleteDate: Date;
    statusFile: StatusFile;
    userID: number;
}

export interface MultipartFile extends InputStreamSource {
    name: string;
    empty: boolean;
    bytes: any;
    resource: Resource;
    size: number;
    contentType: string;
    originalFilename: string;
}

export class ReputationAdd {
    user: string;
    description: string;
}

export interface Principal {
    name: string;
}

export interface HttpSession {
    id: string;
    creationTime: number;
    attributeNames: Enumeration<string>;
    servletContext: ServletContext;
    new: boolean;
    sessionContext: HttpSessionContext;
    valueNames: string[];
    lastAccessedTime: number;
    maxInactiveInterval: number;
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

export interface Enumeration<E> {
}

export class AbstractStringBuilder implements Appendable, CharSequence {
}

export class StringBuffer extends AbstractStringBuilder implements Serializable, Comparable<StringBuffer>, CharSequence {
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
    mappingMatch: MappingMatch;
    matchValue: string;
    servletName: string;
}

export class Locale implements Cloneable, Serializable {
}

export interface ServletContext {
    classLoader: ClassLoader;
    majorVersion: number;
    minorVersion: number;
    attributeNames: Enumeration<string>;
    contextPath: string;
    sessionTimeout: number;
    serverInfo: string;
    servletNames: Enumeration<string>;
    servlets: Enumeration<Servlet>;
    initParameterNames: Enumeration<string>;
    effectiveSessionTrackingModes: SessionTrackingMode[];
    virtualServerName: string;
    requestCharacterEncoding: string;
    servletContextName: string;
    servletRegistrations: { [index: string]: ServletRegistration };
    filterRegistrations: { [index: string]: FilterRegistration };
    effectiveMinorVersion: number;
    responseCharacterEncoding: string;
    effectiveMajorVersion: number;
    jspConfigDescriptor: JspConfigDescriptor;
    sessionCookieConfig: SessionCookieConfig;
    defaultSessionTrackingModes: SessionTrackingMode[];
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
    parameterMap: { [index: string]: string[] };
    reader: any;
    characterEncoding: string;
    localAddr: string;
    serverName: string;
    parameterNames: Enumeration<string>;
    serverPort: number;
    remoteAddr: string;
    remoteHost: string;
    locales: Enumeration<Locale>;
    secure: boolean;
    remotePort: number;
    asyncStarted: boolean;
    servletContext: ServletContext;
    asyncContext: AsyncContext;
    dispatcherType: DispatcherType;
    localPort: number;
    asyncSupported: boolean;
}

export class UserDocumentDTO {
    id: number;
    name: string;
}

export class URL implements Serializable {
}

export class URI implements Comparable<URI>, Serializable {
}

export interface Resource extends InputStreamSource {
    open: boolean;
    file: any;
    url: URL;
    readable: boolean;
    description: string;
    uri: URI;
    filename: string;
}

export interface InputStreamSource {
    inputStream: any;
}

export interface HttpSessionContext {
    ids: Enumeration<string>;
}

export interface Cloneable {
}

export interface CharSequence {
}

export class ClassLoader {
    parent: ClassLoader;
    name: string;
    unnamedModule: Module;
    registeredAsParallelCapable: boolean;
    definedPackages: Package[];
}

export interface Servlet {
    servletInfo: string;
    servletConfig: ServletConfig;
}

export interface ServletRegistration extends Registration {
    runAsRole: string;
    mappings: string[];
}

export interface FilterRegistration extends Registration {
    urlPatternMappings: string[];
    servletNameMappings: string[];
}

export interface JspConfigDescriptor {
    jspPropertyGroups: JspPropertyGroupDescriptor[];
    taglibs: TaglibDescriptor[];
}

export interface SessionCookieConfig {
    name: string;
    path: string;
    comment: string;
    secure: boolean;
    maxAge: number;
    httpOnly: boolean;
    domain: string;
}

export interface ServletResponse {
    contentType: string;
    outputStream: ServletOutputStream;
    locale: Locale;
    writer: PrintWriter;
    characterEncoding: string;
    bufferSize: number;
    committed: boolean;
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

export interface JspPropertyGroupDescriptor {
    buffer: string;
    isXml: string;
    elIgnored: string;
    urlPatterns: string[];
    includePreludes: string[];
    pageEncoding: string;
    includeCodas: string[];
    scriptingInvalid: string;
    deferredSyntaxAllowedAsLiteral: string;
    trimDirectiveWhitespaces: string;
    defaultContentType: string;
    errorOnUndeclaredNamespace: string;
}

export interface TaglibDescriptor {
    taglibURI: string;
    taglibLocation: string;
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
     * Java method: pl.kancelaria.AHG.shared.restapi.administration.restapi.secured.IAdministrationSecuredRestApi.getEventLogsDTO
     */
    getEventLogsDTO(): RestResponse<EventLogListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/administracja/secured/dziennikZdarzen` });
    }

    /**
     * HTTP POST /rest/administracja/secured/order
     * Java method: pl.kancelaria.AHG.shared.restapi.administration.restapi.secured.IAdministrationSecuredRestApi.addOrder
     */
    addOrder(orderDTO: OrderDTO): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/administracja/secured/order`, data: orderDTO });
    }

    /**
     * HTTP DELETE /rest/administracja/secured/order
     * Java method: pl.kancelaria.AHG.shared.restapi.administration.restapi.secured.IAdministrationSecuredRestApi.deleteOrder
     */
    deleteOrder(id: number): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`rest/administracja/secured/order`, data: id });
    }

    /**
     * HTTP GET /rest/administracja/secured/order
     * Java method: pl.kancelaria.AHG.shared.restapi.administration.restapi.secured.IAdministrationSecuredRestApi.getOrders
     */
    getOrders(pageNumber: number, queryParams?: { term?: string; }): RestResponse<OrdersListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/administracja/secured/order`, queryParams: queryParams, data: pageNumber });
    }

    /**
     * HTTP PUT /rest/administracja/secured/order
     * Java method: pl.kancelaria.AHG.shared.restapi.administration.restapi.secured.IAdministrationSecuredRestApi.modifyOrder
     */
    modifyOrder(id: number): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`rest/administracja/secured/order`, data: id });
    }

    /**
     * HTTP POST /rest/administracja/secured/orderDateEnd
     * Java method: pl.kancelaria.AHG.shared.restapi.administration.restapi.secured.IAdministrationSecuredRestApi.finishOrder
     */
    finishOrder(orderFinishDTO: OrderFinishDTO): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/administracja/secured/orderDateEnd`, data: orderFinishDTO });
    }

    /**
     * HTTP POST /rest/authenticate
     * Java method: pl.kancelaria.AHG.shared.restapi.auth.restApi.pub.IAuthPublicRestApi.createAuthenticationToken
     */
    createAuthenticationToken(authenticationRequest: JwtRequest): RestResponse<ResponseEntity<any>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/authenticate`, data: authenticationRequest });
    }

    /**
     * HTTP GET /rest/checkLogin
     * Java method: pl.kancelaria.AHG.shared.restapi.auth.restApi.pub.IAuthPublicRestApi.checkLogin
     */
    checkLogin(queryParams?: { login?: string; }): RestResponse<boolean> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/checkLogin`, queryParams: queryParams });
    }

    /**
     * HTTP GET /rest/document/pub/documentList
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.document.restApi.pub.DocumentPublicRestApi.getDocumentList
     */
    getDocumentList$GET$rest_document_pub_documentList(pageNumber: number, queryParams?: { term?: string; }): RestResponse<DocumentListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/document/pub/documentList`, queryParams: queryParams, data: pageNumber });
    }

    /**
     * HTTP GET /rest/document/pub/download
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.document.restApi.pub.DocumentPublicRestApi.downloadFile
     */
    downloadFile(id: number): RestResponse<ResponseEntity<ByteArrayResource>> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/document/pub/download`, data: id });
    }

    /**
     * HTTP DELETE /rest/document/secured/delete
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.document.restApi.secured.DocumentSecuredRestApi.deleteDocument
     */
    deleteDocument(id: number): RestResponse<ResponseEntity<HttpEntity<any>>> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`rest/document/secured/delete`, data: id });
    }

    /**
     * HTTP GET /rest/document/secured/documentListForUser
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.document.restApi.secured.DocumentSecuredRestApi.getDocumentList
     */
    getDocumentList$GET$rest_document_secured_documentListForUser(id: number, queryParams?: { term?: string; status?: string; }): RestResponse<DocumentListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/document/secured/documentListForUser`, queryParams: queryParams, data: id });
    }

    /**
     * HTTP POST /rest/document/secured/upload
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.document.restApi.secured.DocumentSecuredRestApi.uploadMultipatrFiles
     */
    uploadMultipatrFiles(multipartFile: MultipartFile[]): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/document/secured/upload`, data: multipartFile });
    }

    /**
     * HTTP GET /rest/kategorie/pub/wszystkieKategorie
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.categories.restapi.pub.CategoryPublicRestApi.getCategoryList
     */
    getCategoryList$GET$rest_kategorie_pub_wszystkieKategorie(): RestResponse<CategoryListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/kategorie/pub/wszystkieKategorie` });
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
     * HTTP GET /rest/reputation/pub/addLike
     * Java method: pl.kancelaria.AHG.shared.restapi.reputations.pub.ReputationPublicRestApi.addLikeReputation
     */
    addLikeReputation(id: number): RestResponse<string> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/reputation/pub/addLike`, data: id });
    }

    /**
     * HTTP GET /rest/reputation/pub/addNotLike
     * Java method: pl.kancelaria.AHG.shared.restapi.reputations.pub.ReputationPublicRestApi.addNotLikeReputation
     */
    addNotLikeReputation(id: number): RestResponse<string> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/reputation/pub/addNotLike`, data: id });
    }

    /**
     * HTTP POST /rest/reputation/pub/addReputation
     * Java method: pl.kancelaria.AHG.shared.restapi.reputations.pub.ReputationPublicRestApi.addReputation
     */
    addReputation(request: AddReputation): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`rest/reputation/pub/addReputation`, data: request });
    }

    /**
     * HTTP GET /rest/reputation/pub/getAll
     * Java method: pl.kancelaria.AHG.shared.restapi.reputations.pub.ReputationPublicRestApi.getAllReputation
     */
    getAllReputation(): RestResponse<Reputation[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/reputation/pub/getAll` });
    }

    /**
     * HTTP GET /rest/reputation/pub/getOne
     * Java method: pl.kancelaria.AHG.shared.restapi.reputations.pub.ReputationPublicRestApi.getReputationById
     */
    getReputationById(request: GetReputation): RestResponse<Reputation> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/reputation/pub/getOne`, data: request });
    }

    /**
     * HTTP DELETE /rest/reputation/secured/delete
     * Java method: pl.kancelaria.AHG.shared.restapi.reputations.secured.ReputationSecuredRestApi.deleteReputation
     */
    deleteReputation(id: number): RestResponse<ResponseEntity<HttpStatus>> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`rest/reputation/secured/delete`, data: id });
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
    getRegulationsListByName(queryParams?: { name?: string; }): RestResponse<RegulationListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/rozporzadzenia/pub/listaRozporzadzenWgOpis`, queryParams: queryParams });
    }

    /**
     * HTTP GET /rest/rozporzadzenia/pub/listaRozporzadzenWgOpis
     * Java method: pl.kancelaria.AHG.shared.restapi.modules.regulations.restApi.pub.RegulationPublicRestApi.getRegulationsListByNameAndPage
     */
    getRegulationsListByNameAndPage(pageNumber: number, queryParams?: { name?: string; }): RestResponse<RegulationListDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/rozporzadzenia/pub/listaRozporzadzenWgOpis`, queryParams: queryParams, data: pageNumber });
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
     * HTTP GET /rest/saos/pub/judgments
     * Java method: pl.kancelaria.AHG.externalApi.saosApi.shared.SaosPublicRestApi.getJudgments
     */
    getJudgments(): RestResponse<string> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/saos/pub/judgments` });
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
     * HTTP GET /rest/uzytkownicy/secured/uzytkownicy
     * Java method: pl.kancelaria.AHG.shared.restapi.users.restapi.secured.UserSecuredRestApi.getAllUsers
     */
    getAllUsers(): RestResponse<UserListDocumentDTO> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`rest/uzytkownicy/secured/uzytkownicy` });
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

export type StatusFile = "PUBLIC" | "NOT_PUBLIC" | "DELETE";

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
