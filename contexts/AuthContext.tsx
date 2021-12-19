import {createContext, useContext, useEffect, useState} from 'react';
import {getAccount} from '../services/account-service';
import {login} from '../services/auth-service';
import {IAccount} from '../models/account-model';
import Cookies from 'js-cookie';

const AuthContext = createContext({});

export function useAuth():IAccount {
    return useContext(AuthContext) as IAccount;
}

export async function AuthLogin(data: any) {
    try {
        const {data: dataRes} = await login(data);
        if (dataRes?.id_token) {
            Cookies.set(process.env.AUTH_TOKEN_ADRESS ?? '', dataRes.id_token);
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }

}

function AuthProvider({children}: any) {
    const [account, setAccount] = useState<IAccount>();
    useEffect(() => {
        accountHandler();
    }, []);
    return (
        <AuthContext.Provider value={account ?? {}}>
            {children}
        </AuthContext.Provider>
    );

    async function accountHandler(): Promise<any> {


        try {
            const {data} = await getAccount();
            if (data) {
                setAccount(data);
            }
        } catch (err) {
            console.warn(err);
        }
    }
}


export default AuthProvider;