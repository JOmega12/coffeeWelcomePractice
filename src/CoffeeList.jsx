import React from "react";
import { useCoffee } from "./providers/coffeeProvider";
import { useFavorite } from "./providers/favorite.provider";
import { useAuth } from "./providers/auth.provider";

export const CoffeeList = () => {
  const { coffee } = useCoffee();

  //to use the favorite, you need to get to the part where you iterate the coffee list

  const { user } = useAuth();
  const { favorite, toggleFavorite } = useFavorite();
//   console.log(user, "user");
  console.log(favorite, "favorite");

  return (
    <div
      className="App"
      style={{
        display: "flex",
        width: 1000,
        border: "3px solid black",
        padding: 40,
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {coffee.map((coffeez) => {
        const isFavorite = favorite.find(
          (favoriteCoffee) =>
            favoriteCoffee.userId === user?.id &&
            favoriteCoffee.coffeeId === coffeez.id
        );
        return (
          <div
            key={coffeez.id}
            style={{ width: 100, height: 200, border: "1px solid black" }}
          >
            <h3>{coffeez.title}</h3>
            <p>{coffeez.description}</p>
            <div
              onClick={() => {
                toggleFavorite({ coffeeId: coffeez?.id, userId: user?.id });
                console.log({coffeez}, 'coffeez click');
                console.log(user, 'user click')
              }}
            >
              {isFavorite && <button>{"<3"}</button>}
              {!isFavorite && <button>O</button>}
            </div>
          </div>
        );
      })}
    </div>
  );
};
