import { API_CONFIG } from "./config"

export const getAllFavorites = () => {
   return fetch(API_CONFIG.baseUrl + "/favorite")
      .then((response) => {
         if(!response.ok) {
            throw new Error("Failed to get favorites")
         }
         return response.json()
      })
}


export const createFavorite = ({userId, coffeeId}) => {
   return fetch(API_CONFIG.baseUrl + '/favorite', {
      method: "POST",
      header: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({userId, coffeeId})
   }).then((response) => {
      if(!response.ok) {
         throw new Error("Failed to create a favorite");
      }
      return response;
   })
}

export const deleteFavorite = (id) => {
   return fetch(API_CONFIG.baseUrl + "/favorite/" + id, {
      method: "DELETE",
   }).then((response) => {
      if(!response.ok) {
         throw new Error("Failed to delete a favorite" + id);
      }
      return response;
   })
}

export const toggleFavoriteAPI = async({userId, coffeeId}) => {
   const allFavorites = await getAllFavorites();
   const matchingFavorite = allFavorites.find((favorite) => favorite.userId === userId && favorite.coffeeId === coffeeId);

   if(!matchingFavorite) {
      return await createFavorite({userId, coffeeId}) 
   }
   return await deleteFavorite(matchingFavorite.id)

}