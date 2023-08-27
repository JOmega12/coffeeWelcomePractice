import React, { useState } from "react";
import { useCoffee } from "./providers/coffeeProvider";

export const CreateCoffeeForm = () => {

  const { createCoffee } = useCoffee();

  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        createCoffee({title: titleInput,  description: descriptionInput});
        setTitleInput('');
        setDescriptionInput('');
      }}
    >
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setTitleInput(e.target.value);
        }}
        value={titleInput}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescriptionInput(e.target.value);
        }}
        value={descriptionInput}
      />
      <input type="submit" value="submit" />
    </form>
  );
};
