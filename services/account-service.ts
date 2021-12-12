import api from '../config/api';
import {IAccount} from '../models/account-model';

const baseUrl = process.env.API_URL;

export async function getAccount(): Promise<IAccount> {
    return api.get(`${baseUrl}account`);
}