import ExpenseItem from './ExpenseItem'
import './Expenses.css'
function Expenses(props) {
    return (
        <div className="expenses">
            <ExpenseItem info={props.items[0]}></ExpenseItem>
            <ExpenseItem info={props.items[1]}></ExpenseItem>
            <ExpenseItem info={props.items[2]}></ExpenseItem>
            <ExpenseItem info={props.items[3]}></ExpenseItem>
        </div>
    )
}

export default Expenses;