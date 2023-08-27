import { API_CONFIG } from "./config";


export const registerFetch = ({username, password}) => {
   fetch(API_CONFIG.baseUrl + "/app-users", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password}),
   }).then((res) => {
      if(!res.ok) {
         throw new Error('registering user failed');
      }
      return res.json();
   })
}