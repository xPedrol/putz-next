import api from '../config/api';
import {AxiosResponse} from 'axios';

const baseUrl = process.env.API_URL;

export async function getProjects(): Promise<AxiosResponse<any>> {

    return api.get<AxiosResponse<any>>(`${baseUrl}projects`);
}