import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'


function ExpenseItem(props) {

    const [title, setTitle] = useState(props.info.title);

    const clickHandler = () => {
        setTitle("Updated via State!!");
        console.log(title);
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate info={props.info} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <h2 className='expense-item__price'>${props.info.amount}</h2>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;


