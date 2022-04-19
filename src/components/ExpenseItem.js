import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate info={props.info} />
            <div className='expense-item__description'>
                <h2>{props.info.title}</h2>
                <h2 className='expense-item__price'>${props.info.amount}</h2>
            </div>
        </div>
    )
}

export default ExpenseItem;


