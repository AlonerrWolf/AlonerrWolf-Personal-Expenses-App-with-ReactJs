import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);  //React checks internally if state updated for the first time
  const clickHandler = () => {
    //setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate
        date={props.date}
        amount={props.amount}
        title={props.title}
      />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
