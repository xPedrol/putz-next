import api from '../config/api';
import {IAccount} from '../models/account-model';
import {AxiosResponse} from 'axios';

const baseUrl = process.env.API_URL;

export async function getAccount(): Promise<AxiosResponse<IAccount>> {
    return api.get<IAccount>(`${baseUrl}account`);
}