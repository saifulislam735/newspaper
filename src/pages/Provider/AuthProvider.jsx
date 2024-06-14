import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext('')

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // const user = 'shihab';
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app);

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, current_user => {
            setUser(current_user);
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const userInfo = {
        creatUser,
        login,
        logout,
        user,
        loading

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;