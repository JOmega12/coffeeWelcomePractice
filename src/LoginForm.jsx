import React, { useState } from "react";
import { useAuth } from "./providers/auth.provider";

export const LoginForm = () => {
  const { login, } = useAuth();
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <section>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          login({username: usernameInput, password: passwordInput})
         }}
      >
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsernameInput(e.target.value);
          }}
          value={usernameInput}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
          value={passwordInput}
        />
        <input type="submit" value="submit" />
      </form>
    </section>
  );
};
