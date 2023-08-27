import React from "react";

import "./App.css";
// import { getCoffee } from "./api/getCoffee";
import { CoffeeList } from "./CoffeeList";
import { CoffeeProvider } from "./providers/coffeeProvider";
import { CreateCoffeeForm } from "./CreateCoffeeForm";
import { AuthProvider } from "./providers/auth.provider";
import { SignUpForm } from "./SignUpForm";

function App() {

  return (
    <AuthProvider>
      <CoffeeProvider>
        <SignUpForm />
        <CoffeeList />
        <CreateCoffeeForm />
      </CoffeeProvider>
    </AuthProvider>
  );
}

export default App;