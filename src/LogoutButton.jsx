import { useAuth } from "./providers/auth.provider"
import React from "react";


export const LogoutButton = () => {
   const {logout} = useAuth();

   return(
      <button onClick={logout}>Logout</button>
   )
}