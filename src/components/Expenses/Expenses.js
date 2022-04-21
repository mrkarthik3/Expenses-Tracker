import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = selectedYear => {
        console.log("In Expenses.js");
        console.log(selectedYear);
        // Lifted state value "selectedYear" from below component ExpensesFilter
        // is being used to update state in this component. 
        setFilteredYear(selectedYear);
    }
    return (
        <Card className="expenses">
            {/*Generally two-way binding is done on normal html elements (Eg. input boxes)
            But here since I'm doing that on a React Element/Component,
            ExpensesFilter is a Custom Controlled Component*/}
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseItem info={props.items[0]}></ExpenseItem>
            <ExpenseItem info={props.items[1]}></ExpenseItem>
            <ExpenseItem info={props.items[2]}></ExpenseItem>
            <ExpenseItem info={props.items[3]}></ExpenseItem>
        </Card>
    )
}

export default Expenses;