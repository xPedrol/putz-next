export interface IAuthenticateReq {
    password: string;
    rememberMe: boolean;
    username: string;
}
export interface IAuthenticateRes {
    id_token: string;
}