import React, { createContext, useState, useEffect, useContext } from "react";
import { getNewCoffee } from "../api/getNewCoffee";
import { getCoffee } from "../api/getCoffee";

const CoffeeContext = createContext({});

export const CoffeeProvider = ({ children }) => {
  const [coffee, setCoffee] = useState([]);

  const refetch = () => {
    getCoffee().then(setCoffee);
  }

  useEffect(() => {
    refetch();
  }, []);

  // const getCoffee = ({title, description}) => getNewCoffee({title, description});
  const createCoffee = ({ title, description }) =>{
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
    <CoffeeContext.Provider value={{ coffee, setCoffee, createCoffee }}>
      {children}
    </CoffeeContext.Provider>
  );
};

export const useCoffee = () => {
  const context = useContext(CoffeeContext);
  return {
    coffee: context.coffee,
    setCoffee: context.setCoffee,
    createCoffee: context.createCoffee,
  };
};
