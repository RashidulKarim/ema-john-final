import React, { createContext } from 'react';
import useFirebase from '../components/hook/useFirebase';

export const authContext = createContext()
const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <authContext.Provider value ={allContext}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;