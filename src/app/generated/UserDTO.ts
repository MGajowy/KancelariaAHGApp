/* tslint:disable */
/* eslint-disable */

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

export type UserStateEnum = "AKTYWNY" | "NIEAKTYWNY" | "ZABLOKOWANY" | "USUNIETY";

export type UserSexEnum = "KOBIETA" | "MEZCZYZNA";

export type RolesName = "USER" | "ADMIN";
