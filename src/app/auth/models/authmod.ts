export interface Ilogin {

    email: string;
    password?: string;
    confirmPassword?: string;
    code?: string;


}

export interface Iregister {
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
    country: string,
    phoneNumber: string,
    profileImage: string,
}

export interface Iconfirm {
    email: string,
    code: string
}