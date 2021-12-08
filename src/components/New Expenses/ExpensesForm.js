import React,{useState} from 'react'
import Grid from '../UI/Grid';
import Button  from '../UI/Button';
import Input from '../UI/Input';
const ExpensesForm = ({onSaveExpenseData}) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
    };

   //submit
   const submitHandler = (event) =>{
    event.preventDefault();
    const expenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
    }

    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
   }

    return (
            <Grid>
                <form className="ui form" onSubmit={submitHandler}>
               <Input
               label = "Title"
               placeholder = "Title"
               type="text"
               value={enteredTitle}
               onChange={titleChangeHandler}
               />
               <div className="two fields">
               <Input
               label = "Amount"
               placeholder = "Amount"
               type="number"
               min = '0.01'
               step = '0.01'
               value={enteredAmount}
               onChange={amountChangeHandler}
               />
               <Input
               label = "Date"
               placeholder = "Date"
               type="date"
               min='2019-01-01'
               max='2022-12-31'
               value = {enteredDate}
               onChange={dateChangeHandler}
               />
               </div>
               <Button
               text="Submit"
               color = "blue"
               />
            </form>
            </Grid>

    )
}

export default ExpensesForm;
