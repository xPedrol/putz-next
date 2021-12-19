import api from '../config/api';
import {IAuthenticateReq, IAuthenticateRes} from '../models/authenticate-model';
import {AxiosResponse} from 'axios';

const baseUrl = process.env.API_URL;

export async function login(body: IAuthenticateReq): Promise<AxiosResponse<IAuthenticateRes>> {
    return api.post<IAuthenticateRes>(`${baseUrl}authenticate`, body);
}
