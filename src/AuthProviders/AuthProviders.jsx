
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createContext = (email, password)=>{

        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }
    // sign user
    const signInUser = (email, password)=>{

        return signInWithEmailAndPassword(auth,email, password)
        setLoading(true)
    }

    // Log Out
    const LogOut = ()=>{

        return signOut(auth)
        setLoading(true)
    }
    // one auth state change

    useEffect(()=>{
        const unsubScribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log('out put is done ', currentUser);
        })

        return()=>{
            unsubScribe()
        }

    },[])

    const nameInfo = {user, createContext, signInUser, LogOut, loading}

    return (
        <AuthContext.Provider value={nameInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;





AuthProviders.propTypes ={
    children: PropTypes.node
}

// context step-4
//  1. create context and export it
// 2. set provider with value
// 3. use the Auth Provider in the main.jsx file
// 4. access children in the authProvider component as children and use it in the middle of the provider
