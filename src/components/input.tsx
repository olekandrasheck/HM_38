import React from "react";

export const Input = () => {
  const [string, setString] = React.useState("");
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setString(event.target.value);
  };

  return (
    <div>
      <input type="text" value={string} onChange={inputHandler} />
      <span>{string}</span>
    </div>
  );
};
