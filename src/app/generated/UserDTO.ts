/* tslint:disable */
/* eslint-disable */

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

export type UserStateEnum = "AKTYWNY" | "NIEAKTYWNY" | "ZABLOKOWANY" | "USUNIETY";

export type UserSexEnum = "KOBIETA" | "MEZCZYZNA";
