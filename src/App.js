import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/page/Home';
import Header from './components/UI/Header';
import FormData from './components/page/Form';
const App = () => {

  return (
    <BrowserRouter>
      <Header
      title="Your Expenses"
      subtitle="View in Chart"
      />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/formik' element={<FormData/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
