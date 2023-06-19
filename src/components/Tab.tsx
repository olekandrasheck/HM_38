import React from "react";
import "./style.css";
import { Button } from "./button";
import { Input } from "./input";
import { Timer } from "./Timer";

export const Tabs = () => {
  const [changeTable, setChangeTab] = React.useState(1);

  const handleChange = (index: number) => {
    setChangeTab(index);
  };
  return (
    <div className="tab-main-container">
      <div className="container-tabs">
        <div
          onClick={() => handleChange(1)}
          className={changeTable === 1 ? "active-tab" : "tab"}
        >
          Input
        </div>
        <div
          onClick={() => handleChange(2)}
          className={changeTable === 2 ? "active-tab" : "tab"}
        >
          Button
        </div>
        <div
          onClick={() => handleChange(3)}
          className={changeTable === 3 ? "active-tab" : "tab"}
        >
          Timer
        </div>
      </div>
      <div className={changeTable === 1 ? "active-content" : "content"}>
        <Input />
      </div>
      <div className={changeTable === 2 ? "active-content" : "content"}>
        <Button />
      </div>
      <div className={changeTable === 3 ? "active-content" : "content"}>
        <Timer />
      </div>
    </div>
  );
};
