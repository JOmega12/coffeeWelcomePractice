import React from "react";

import "./App.css";
// import { getCoffee } from "./api/getCoffee";
import { CoffeeList } from "./CoffeeList";
import { CoffeeProvider } from "./providers/coffeeProvider";
import { CreateCoffeeForm } from "./CreateCoffeeForm";
import { AuthProvider } from "./providers/auth.provider";
import { SignUpForm } from "./SignUpForm";
import { LoginForm } from "./LoginForm";
import {Toaster} from 'react-hot-toast';
import { FavoriteProvider } from "./providers/favorite.provider";

function App() {

  return (
    <AuthProvider>
      <CoffeeProvider>
        <FavoriteProvider>
          <Toaster />
          <CoffeeList />
          <SignUpForm />
          <LoginForm />
          <CreateCoffeeForm />
        </FavoriteProvider>
      </CoffeeProvider>
    </AuthProvider>
  );
}

export default App;
