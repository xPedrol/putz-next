import api from '../config/api';
import {IAuthenticate} from '../models/authenticate-model';

const baseUrl = process.env.API_URL;

export async function login(body: IAuthenticate): Promise<any> {
    return api.post(`${baseUrl}authenticate`, body);
}
