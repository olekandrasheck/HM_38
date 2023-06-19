import React from "react";

export const Button = () => {
  const [luck, setLuck] = React.useState(0);
  const handleClick =()=>{
    setLuck(luck+1)
  }
  return (
    <div>
      <button onClick={handleClick}>TO BOOST YOUR LUCK</button>
      <div>{luck}</div>
    </div>
  );
};
