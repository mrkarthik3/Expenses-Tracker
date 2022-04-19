import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {

    return (
        <Card className='expense-item'>
            <ExpenseDate info={props.info} />
            <div className='expense-item__description'>
                <h2>{props.info.title}</h2>
                <h2 className='expense-item__price'>${props.info.amount}</h2>
            </div>
        </Card>
    )
}

export default ExpenseItem;


