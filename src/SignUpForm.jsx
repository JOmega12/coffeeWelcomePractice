import { useState, React } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "./providers/auth.provider";



export const SignUpForm = () => {

   const { register } = useAuth();

   const [usernameInput, setUsernameInput] = useState('');
   const [passwordInput, setPasswordInput] = useState('');

   return (
      <>
         <form
         action=""
         onSubmit={(e) => {
            e.preventDefault();
            setUsernameInput('');
            setPasswordInput('');
            register({username: usernameInput, password: passwordInput})
               .then(() => {
                  toast.success('registered!')
               })
               .catch(() => {
                  toast.error('something went wrong!')
               })
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
}