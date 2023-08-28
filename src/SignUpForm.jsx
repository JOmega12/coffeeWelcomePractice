import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "./providers/auth.provider";
import { LogoutButton } from "./LogoutButton";

export const SignUpForm = () => {
  const { register, isRegister, setIsRegister } = useAuth();
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <>
      {/* need to add the username and password after clicking  --clear*/}
      {/* this is used to double check if the local storage is being used */}
      {/* currently local storage is not being used */}
      {isRegister=== true ? (
        <>
          <div>{usernameInput}</div>
          <div>{passwordInput}</div>
        </>
      ) : (
        ""
      )}
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setUsernameInput("");
          setPasswordInput("");
          register({ username: usernameInput, password: passwordInput })
          .then(() => {
             toast.success("registered!");
            })
            .catch(() => {
              toast.error("something went wrong!");
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
        <LogoutButton />
      </form>
    </>
  );
};
