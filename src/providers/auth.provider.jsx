import React, { createContext, useContext, useEffect, useState } from "react";
import { registerFetch } from "../api/register";
import { getUserFromServer } from "../api/getUser";


//sign up form is not showing 

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
   const [user, setUser] = useState({});
   const [isRegister, setIsRegister] = useState(false);
   const register = ({username, password}) => {
      registerFetch({username, password})
         .then((user) => {
            //this sets the item in register in the local storage
            localStorage.setItem("user", JSON.stringify(user))
            return setUser(user)
         })
   };

   //this loads up stuff for any component
   useEffect(() => {
      const maybeUser = localStorage.getItem("user");
      if (maybeUser){
         try {
            setUser(JSON.parse(maybeUser))
         } catch (error) {
            console.error("Error parsing user data")
         }
      }
   }, []);


   //the login is not showing and the login is not registering
   const login = async({username, password}) => {
      const user = await getUserFromServer({username});
      console.log({user})
      if (user.password === password) {
         throw new Error('invalid password')
      }
      setUser(user);
   }

   const logout = () => {
      setUser({});
      localStorage.removeItem("user");
      setIsRegister(false);
   }


   return(
      <AuthContext.Provider value ={{
         user, setUser, register, logout, isRegister, setIsRegister, login
      }}>
         {children}
      </AuthContext.Provider>
   )
};


export const useAuth = () => {
   const context = useContext(AuthContext);
   return {
      user: context.user,
      setUser: context.setUser,
      register: context.register,
      isRegister: context.isRegister,
      setIsRegister: context.setIsRegister,
      logout: context.logout,
      login: context.login,
   };
}

  
