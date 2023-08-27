import { React, createContext, useContext, useEffect, useState } from "react";
import { registerFetch } from "../api/register";


const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const register = ({username, password}) => {
      registerFetch({username, password})
         .then((user) => setUser(user))
   };

   useEffect(() => {

   }, []);

   return(
      <AuthContext.Provider value ={{
         user, setUser, register
      }}>
         {children}
      </AuthContext.Provider>
   )
};


export const useAuth = () => {
   const context = useContext(AuthContext);
   return context;
}

  
