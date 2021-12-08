import React,{useState} from 'react'
import ExpensesChart from '../Expenses/ExpensesChart';
import Expenseslist from '../Expenses/Expenseslist';
import ExpensesForm from '../New Expenses/ExpensesForm';
import Grid from '../UI/Grid';
import SelectDropdown from '../UI/SelectDropdown';
import SimpleExpenses from '../../Content/SimpleExpenses';
import Switchs from '../UI/Switchs';
const Home = () => {
 const[expenses, setExpenses] = useState(SimpleExpenses);
 const[filterYear, setFilterYear] = useState('2021');
 const [toggle, setToggle] = useState(false);
  //get data from expensesForm
 const getExpenseData = (data) =>{
   const calculateExpense = {
     ...data,
     id: Math.random().toString()
   }
   setExpenses(prev =>{
     return [calculateExpense, ...prev]
   });
 }

const filteredExpenses = (year) =>{
  setFilterYear(year);
}

const filterExpenses = expenses.filter((expense) =>{
  return expense.date.getFullYear().toString() === filterYear;
})



  return (
    <div>
      <Grid>
        <Switchs setToggle = {setToggle}
        />
      </Grid>
      <ExpensesChart
      expenses = {filterExpenses}
      />
     {toggle &&
     <ExpensesForm
     onSaveExpenseData = {getExpenseData}
     />}
      <SelectDropdown
      filter = {filteredExpenses}
      />
      <Expenseslist
      items={filterExpenses}
      />
    </div>
  )
}

export default Home;

