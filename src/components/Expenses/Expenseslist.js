import React from 'react'
import Grid from '../UI/Grid';
import ExpenseItem from './ExpenseItem';

const Expenseslist = ({items}) => {

    let itemContent = <p>No Expenses Found.</p>

    if(items.length > 0){
        itemContent =  items.map((item) => (
            <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            />
        ))
    }
    return (

            <Grid>
                {itemContent}
            </Grid>

    )
}

export default Expenseslist;
