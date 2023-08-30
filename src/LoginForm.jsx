import React, { useState } from "react";
import { useAuth } from "./providers/auth.provider";
import { toast } from "react-hot-toast";

export const LoginForm = () => {
  const { login, setIsRegister} = useAuth();
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <>
      <h2>Login</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          login({username: usernameInput, password: passwordInput})
            .catch((e) => {
              // console.error('cannot login')
              toast.error(e.message)
            });
          setIsRegister(true);
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
    </>
  );
};
