/* tslint:disable */
/* eslint-disable */

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

export type UserStateEnum = "AKTYWNY" | "NIEAKTYWNY" | "ZABLOKOWANY" | "USUNIETY";

export type UserSexEnum = "KOBIETA" | "MEZCZYZNA";

export type RolesName = "USER" | "ADMIN";
