import {createContext, useContext, useEffect, useState} from 'react';
import {getAccount} from '../services/account-service';
import {IAccount} from '../models/account-model';

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext);
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
            const account = await getAccount();
            if (account) {
                setAccount(account);
            }
        } catch (err) {
            console.warn(err);
        }
    }
}


export default AuthProvider;