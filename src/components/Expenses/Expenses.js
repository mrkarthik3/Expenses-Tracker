import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem info={props.items[0]}></ExpenseItem>
            <ExpenseItem info={props.items[1]}></ExpenseItem>
            <ExpenseItem info={props.items[2]}></ExpenseItem>
            <ExpenseItem info={props.items[3]}></ExpenseItem>
        </Card>
    )
}

export default Expenses;