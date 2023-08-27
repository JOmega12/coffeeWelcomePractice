import React from "react";

import "./App.css";
// import { getCoffee } from "./api/getCoffee";
import { CoffeeList } from "./CoffeeList";
import { CoffeeProvider } from "./providers/coffeeProvider";
import { CreateCoffeeForm } from "./CreateCoffeeForm";

function App() {

  return (
    <CoffeeProvider>
      <CoffeeList />
      <CreateCoffeeForm />
    </CoffeeProvider>
  );
}

export default App;
