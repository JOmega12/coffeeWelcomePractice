import React, { createContext, useState, useEffect, useContext } from "react";
import { getAllFavorites, toggleFavoriteAPI } from "../api/create-favorite";

const FavoriteContext = createContext({});

export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const refetch = () => {
    getAllFavorites().then(setFavorite);
  };

  useEffect(() => {
    refetch();
  }, []);

  // const getCoffee = ({title, description}) => getNewCoffee({title, description});

  const toggleFavorite = ({ userId, coffeeId }) => {
    return toggleFavoriteAPI({ userId, coffeeId }).then(() => {
      return refetch();
    });
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorite,
        toggleFavorite,
        setFavorite,
      }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  return {
    favorite: context.favorite,
    setFavorite: context.setFavorite,
    toggleFavorite: context.toggleFavorite,
  };
};
