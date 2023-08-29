import { API_CONFIG } from "./config"


export const getUserFromServer = ({username}) => {
   return fetch(API_CONFIG.baseUrl + "/app-users")
      .then((response) => {
         if(!response.ok) {
            throw new Error("could not get user")
         }
         return response.json();
      })
      .then(users => users.find((user) => user.username === username))
      .then((user) => {
         if(!user) {
            throw new Error("user not found")
         }
         return user
      })
}