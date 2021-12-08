import React from 'react'
import ExpenseDate from '../Expenses/ExpenseDate';
import '../Styles/ExpenseItem.css';
const ExpenseItem = ({title, amount, date, Key}) => {

    return (
        <div className='expense-item' key={Key}>
        <ExpenseDate date={date}/>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>
            ${amount}
          </div>
        </div>
      </div>
    )
}

export default ExpenseItem;
