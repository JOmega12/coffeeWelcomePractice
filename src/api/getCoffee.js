import { API_CONFIG } from "./config"


export const getCoffee = () => {
   return fetch(API_CONFIG.baseUrl + "/coffee").then((res) =>
      res.json()
   );
};