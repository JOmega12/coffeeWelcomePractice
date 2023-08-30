import React, { createContext, useState, useEffect, useContext } from "react";

const favoriteContext = createContext({});

export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const refetch = () => {
   //  getCoffee().then(setCoffee);

  }

  useEffect(() => {
    refetch();
  }, []);

  // const getCoffee = ({title, description}) => getNewCoffee({title, description});
  const createFavorite = ({userId, coffeeId}) =>{
    return getNewCoffee({ title, description })
      .then(res => {
        if(!res.ok) {
          alert('something failed');
          return
        }
        refetch();
      })
    }

  return (
    <FavoriteProvider.Provider value={{ }}>
      {children}
    </FavoriteProvider.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(favoriteContext);
  return {
  };
};
