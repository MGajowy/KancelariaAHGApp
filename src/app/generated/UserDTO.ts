/* tslint:disable */
/* eslint-disable */

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

export type UserAccountType = "ADMINISTRATOR" | "UZYTKOWNIK";

export type UserSexEnum = "KOBIETA" | "MEZCZYZNA";
