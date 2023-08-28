import React, { createContext, useContext, useEffect, useState } from "react";
import { registerFetch } from "../api/register";


const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const [isRegister, setIsRegister] = useState(false);
   const register = ({username, password}) => {
      registerFetch({username, password})
         .then((user) => {
            //this sets the item in register in the local storage
            localStorage.setItem("user", JSON.stringify(user))
            return setUser(user)
         })
   };

   const logout = () => {
      setUser(null);
      localStorage.removeItem("user");
   }

   //this loads up stuff for any component
   useEffect(() => {
      const maybeUser = localStorage.getItem("user");
      if (maybeUser){
         setUser(JSON.parse(maybeUser))
      }
   }, []);

   return(
      <AuthContext.Provider value ={{
         user, setUser, register, logout, isRegister, setIsRegister
      }}>
         {children}
      </AuthContext.Provider>
   )
};


export const useAuth = () => {
   const context = useContext(AuthContext);
   return context;
}

  
