import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card.js";

function ExpenseItem(props) {

    return (

        <Card className="expense-item">
            <ExpenseDate date={props.date} amount={props.amount} title={props.title}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
