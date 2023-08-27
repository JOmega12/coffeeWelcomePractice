import React from "react"
import { useCoffee } from "./providers/coffeeProvider";

export const CoffeeList = () => {

   const { coffee } = useCoffee();
   return (
      <div
         className="App"
         style={{
            display: "flex",
            width: 1000,
            border: "3px solid black",
            padding: 40,
            justifyContent: 'space-around',
            flexWrap: 'wrap'
         }}
      >
         {coffee.map((item) => (
            <div
               key={item.id}
               style={{ width: 100, height: 200, border: "1px solid black" }}
            >
               <h3>{item.title}</h3>
               <p>{item.description}</p>
            </div>
         ))}
      </div>
   )
}