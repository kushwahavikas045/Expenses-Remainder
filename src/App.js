import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/page/Home';
import Header from './components/UI/Header';
import FormData from './components/page/Form';
import Feedback from './components/page/Feedback/Feedback';
import GlobalError from '../src/components/page/Error/GlobalError';
import ErrorUi from '../src/components/UI/Errorui';
const App = () => {

  return (
    <BrowserRouter>
    {/* error boundary wrapper */}
    <GlobalError>
      <Header
      title="Your Expenses"
      subtitle="View in Chart"
      />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/formik' element={<FormData/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/error" element={<ErrorUi/>}/>
      </Routes>
      </GlobalError>
    </BrowserRouter>
  )
}

export default App;
