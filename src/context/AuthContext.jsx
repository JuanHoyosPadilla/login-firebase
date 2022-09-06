import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import {useNavigate} from 'react-router-dom'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()  
  const [userLogin, setUserLogin] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if(currentUser){
          setUserLogin(currentUser);
          navigate('/')
      }else{
        setUserLogin(null)
        navigate('/login')
      }
      setLoading(false);
    });
  }, []);

  const cerrarSesion = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ userLogin, loading, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
};
