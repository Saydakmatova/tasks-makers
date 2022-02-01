import React from "react";
import { MainContext } from "../context/MainProvider";

const Receipts = () => {
  const { onChangeValue } = React.useContext(MainContext);
  return (
    <div onChange={onChangeValue}>
      <h2>Choose one of the dishes</h2>
      <input type="radio" value="porridge" name="gender" />
      Porridge
      <input type="radio" value="cutlet" name="gender" />
      Cutlet
      <input type="radio" value="noodles" name="gender" />
      Noodles
    </div>
  );
};

export default Receipts;
