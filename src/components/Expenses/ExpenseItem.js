import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'


function ExpenseItem(props) {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate info={props.info} />
                <div className="expense-item__description">
                    <h2>{props.info.title}</h2>
                    <div className="expense-item__price">${props.info.amount}</div>
                </div>
            </Card>
        </li>

    )
}

export default ExpenseItem;


