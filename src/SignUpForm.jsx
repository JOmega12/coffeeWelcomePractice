import React, { useState } from "react";
import { useAuth } from "./providers/auth.provider";
import { LogoutButton } from "./LogoutButton";

export const SignUpForm = () => {
  const { user, register, isRegister, setIsRegister } = useAuth();
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <>
      {/* need to access the user first to put the state */}
      <h2>Sign Up</h2>
      {isRegister ? (
        <>
          <div>{user.username}</div>
          <div>{user.password}</div>
        </>
      ) : (
        <> 
          <h2>Not Logged In</h2>
        </>
      )}
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setUsernameInput("");
          setPasswordInput("");
          register({ username: usernameInput, password: passwordInput })
          setIsRegister(true);
          console.log(user)
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
        <LogoutButton />
      </form>
    </>
  );
};
